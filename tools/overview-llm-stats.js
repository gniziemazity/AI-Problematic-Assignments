"use strict";

function _diffOpenForIds(assignmentLower, ids) {
	if (!ids?.length) return;
	const id = ids[0];
	navigateToDifferentiator({
		lesson: assignmentLower,
		group: "assignments",
		id,
	});
}

function _idChips(ids, max, assignmentLower) {
	const total = ids?.length ?? 0;
	if (!total) return "<span style='color:var(--clr-muted)'>—</span>";
	const shown = ids.slice(0, max);
	const more = total - shown.length;
	const parts = shown.map((sid) => {
		const url = buildToolUrl("differentiator.html", {
			lesson: assignmentLower,
			group: "assignments",
			id: sid,
		});
		return `<a href="${url}" target="_blank" class="id-chip">${escHtml(sid)}</a>`;
	});
	if (more > 0) parts.push(`<span class="id-chip-more">+${more}</span>`);
	return parts.join(" ");
}

function renderStudentVsLlmCards(body) {
	if (!_pyStats?.assignments?.length) return;
	if (!_pyStats.llm_assignments?.length) return;
	const card = mkCard(body, "Per-Trap Rate: Students vs LLM Probes", "wide");
	const llmRows = _pyStats.llm_rows ?? [];
	const llmHeader = llmRows.length
		? `<div style="font-size:11px;color:var(--clr-muted);margin-bottom:6px">` +
			`LLM panel = ${llmRows.length} probe row(s): ` +
			llmRows.map((r) => escHtml(r.name)).join(", ") +
			"</div>"
		: "";
	let html = llmHeader;
	html +=
		'<table class="st-tbl"><tr><th>Assignment</th><th>Mark</th>' +
		"<th>Student-side</th><th>LLM-side</th></tr>";
	_pyStats.assignments.forEach((a) => {
		const llm = _pyStats.llm_assignments.find((x) => x.lower === a.lower);
		if (!a.traps?.length && !llm?.traps?.length) return;
		const studentTraps = a.traps || [];
		const llmTraps = llm?.traps || [];
		const keys = new Set([
			...studentTraps.map((t) => t.key),
			...llmTraps.map((t) => t.key),
		]);
		let first = true;
		keys.forEach((key) => {
			const st = studentTraps.find((t) => t.key === key);
			const lt = llmTraps.find((t) => t.key === key);
			const label = st?.label || lt?.label || key;
			const sCell = st
				? `${(st.hit_rate * 100).toFixed(0)}% (${st.n_fired}/${st.n_answered})`
				: "—";
			const lCell = lt
				? `${(lt.hit_rate * 100).toFixed(0)}% (${lt.n_fired}/${lt.n_answered})`
				: "—";
			html +=
				`<tr><td>${first ? escHtml(a.name) : ""}</td>` +
				`<td>${escHtml(label)}</td>` +
				`<td>${sCell}</td><td>${lCell}</td></tr>`;
			first = false;
		});
	});
	card.insertAdjacentHTML("beforeend", html + "</table>");
}

function renderCofiringMatrix(body) {
	const pairs = _pyStats?.cofiring;
	if (!pairs?.length) return;
	const minLift = 1.5;
	const minN = 3;
	const filtered = pairs.filter(
		(p) => (p.lift ?? 0) >= minLift && p.n_xy >= minN,
	);
	if (!filtered.length) return;
	const card = mkCard(
		body,
		`Co-firing (lift ≥ ${minLift}×, n ≥ ${minN})`,
		"wide",
	);
	card.insertAdjacentHTML(
		"beforeend",
		'<div style="font-size:11px;color:var(--clr-muted);margin-bottom:6px">' +
			"Read row → column: <i>lift = P(Y | X) / P(Y)</i>. " +
			"Click the joint-firers count to open the differentiator on " +
			"the first co-firing student; the chip list under it links " +
			"to each individually. Computed on the student subset only.</div>",
	);
	filtered.sort((a, b) => (b.lift ?? 0) - (a.lift ?? 0));
	let html =
		'<table class="st-tbl"><tr><th>X (given)</th><th>Y (also)</th>' +
		"<th>P(Y|X)</th><th>P(Y)</th><th>Lift</th><th>n_xy / n_x</th>" +
		"<th>Joint firers</th></tr>";
	filtered.slice(0, 60).forEach((p) => {
		const liftStr = p.lift ? p.lift.toFixed(2) + "×" : "—";
		const pyx =
			p.p_y_given_x != null ? (p.p_y_given_x * 100).toFixed(0) + "%" : "—";
		const py = p.p_y != null ? (p.p_y * 100).toFixed(0) + "%" : "—";
		const chips = _idChips(p.joint_ids, 8, p.y_assn);
		html +=
			`<tr><td><b>${escHtml(p.x_assn)}</b> / ${escHtml(p.x_label)}</td>` +
			`<td><b>${escHtml(p.y_assn)}</b> / ${escHtml(p.y_label)}</td>` +
			`<td>${pyx}</td><td>${py}</td>` +
			`<td><b>${liftStr}</b></td>` +
			`<td>${p.n_xy} / ${p.n_x}</td>` +
			`<td>${chips}</td></tr>`;
	});
	card.insertAdjacentHTML("beforeend", html + "</table>");
}

function renderCuratedMoments(body) {
	const groups = _pyStats?.curated_moments;
	if (!groups?.length) return;
	const card = mkCard(
		body,
		"Curated Learning Moments — Reached vs Missed",
		"wide",
	);
	card.insertAdjacentHTML(
		"beforeend",
		'<div style="font-size:11px;color:var(--clr-muted);margin-bottom:6px">' +
			"Per-assignment teacher-defined moments " +
			"(<code>assignments/&lt;a&gt;/curated_moments.csv</code>). " +
			"<i>Reached</i> = a student whose underlying trap " +
			"<i>did not</i> fire (polarity <code>not_fired</code>) or " +
			"<i>did</i> fire (polarity <code>fired</code>). Click a " +
			"missed-id chip to inspect that student's submission.</div>",
	);
	let html =
		'<table class="st-tbl"><tr><th>Assignment</th><th>Moment</th>' +
		"<th>Reached</th><th>Missed by</th></tr>";
	groups.forEach((g) => {
		g.moments.forEach((m, i) => {
			const reached =
				`${m.n_reached}/${m.n_valid}` +
				` <span style='color:var(--clr-muted)'>` +
				`(${m.n_valid ? ((m.n_reached / m.n_valid) * 100).toFixed(0) + "%" : "—"})</span>`;
			const chips = _idChips(m.missed_ids, 12, g.assignment);
			html +=
				`<tr><td>${i === 0 ? escHtml(g.name) : ""}</td>` +
				`<td>${escHtml(m.label)}</td>` +
				`<td>${reached}</td><td>${chips}</td></tr>`;
		});
	});
	card.insertAdjacentHTML("beforeend", html + "</table>");
}
