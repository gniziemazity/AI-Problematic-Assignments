"use strict";

let _current = null;

async function _init() {
	let entries;
	try {
		const resp = await fetch("/assignments/");
		if (!resp.ok) throw new Error(resp.status);
		entries = await resp.json();
	} catch (e) {
		document.getElementById("no-assignment").textContent =
			"Failed to load assignments: " + e.message;
		return;
	}

	const names = entries
		.filter((e) => e.kind === "directory")
		.map((e) => e.name);

	const tabsEl = document.getElementById("assignment-tabs");
	for (const name of names) {
		const btn = document.createElement("button");
		btn.textContent = name;
		btn.dataset.name = name;
		btn.addEventListener("click", () => _select(name));
		tabsEl.appendChild(btn);
	}

	const params = new URLSearchParams(location.search);
	const preselect = params.get("lesson");
	const toSelect =
		names.find(
			(n) => n.toLowerCase() === (preselect || "").toLowerCase(),
		) || names[0];
	if (toSelect) _select(toSelect);
}

async function _select(name) {
	_current = name;

	document.querySelectorAll("#assignment-tabs button").forEach((btn) => {
		btn.classList.toggle("active", btn.dataset.name === name);
	});

	document.getElementById("submissions-btn").disabled = false;

	const iframe = document.getElementById("preview-frame");
	const noMsg = document.getElementById("no-assignment");
	const codeEl = document.getElementById("code-block");

	iframe.style.display = "none";
	noMsg.style.display = "flex";
	noMsg.textContent = "Loading…";
	codeEl.textContent = "";

	try {
		const resp = await fetch(`/assignments/${name}/instructions.html`);
		if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
		const html = await resp.text();

		const base = `${location.origin}/assignments/${name}/`;
		iframe.srcdoc = `<!DOCTYPE html><html><head><base href="${base}"><style>body{margin:16px 20px;font-family:sans-serif;font-size:14px;line-height:1.6;color:#222;}img{max-width:100%;height:auto;}ol,ul{padding-left:1.5em;margin:8px 0;}li{margin:4px 0;}p{margin:8px 0;}</style></head><body>${html}</body></html>`;
		iframe.style.display = "";
		noMsg.style.display = "none";
		codeEl.textContent = html;
	} catch (e) {
		noMsg.textContent = `Could not load instructions: ${e.message}`;
		noMsg.style.display = "flex";
		codeEl.textContent = "";
	}
}

document.getElementById("submissions-btn").addEventListener("click", () => {
	if (_current) navigateToStudents({ lesson: _current, group: "assignments" });
});

_init();
