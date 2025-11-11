# 🧠 ScriptLab

**ScriptLab** is an interactive, browser-based playground for learning and testing shell scripting — inspired by Docker Playground, but focused entirely on scripting environments.  
It provides an isolated sandbox where users can write, run, and visualize scripts safely, without affecting their local system.

---

## 🚀 Features

- **Live script execution:** Run Bash, Python, or PowerShell scripts directly in the browser.
- **Safe sandbox environment:** Scripts execute inside lightweight containers with strict resource limits.
- **Modern web interface:** Built with React + TailwindCSS for a responsive, dark-mode UI.
- **Realtime console output:** Streamed execution results and logs from the backend.
- **Extensible architecture:** Easily add new scripting languages or environments via backend modules.

---

## 🧩 Architecture Overview

| Component | Stack | Description |
|------------|--------|-------------|
| **Frontend** | React + TailwindCSS | Code editor (Monaco), console, and UI |
| **Backend API** | FastAPI | Handles script execution, sandboxing, and user session management |
| **Container Runtime** | Docker | Runs isolated script environments securely |
| **Database (planned)** | PostgreSQL | For storing user snippets and session history |

---


