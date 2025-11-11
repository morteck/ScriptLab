# Optional advanced sandbox for running scripts in Docker containers safely
import docker

def run_in_container(code: str, language: str = "bash"):
    client = docker.from_env()
    image = "bash:5.2" if language.lower() == "bash" else None
    if not image:
        return {"error": "Unsupported language"}
    container = client.containers.run(
        image, 
        command=f"bash -c '{code}'",
        detach=True,
        mem_limit="50m",
        cpu_quota=50000,
        network_disabled=True
    )
    result = container.logs().decode()
    container.remove()
    return {"output": result}
