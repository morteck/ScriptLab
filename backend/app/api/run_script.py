from fastapi import APIRouter
from pydantic import BaseModel
import subprocess

router = APIRouter()

class ScriptRequest(BaseModel):
    language: str
    code: str

@router.post("/run")
def run_script(request: ScriptRequest):
    if request.language.lower() == "bash":
        try:
            result = subprocess.run(
                ["bash", "-c", request.code],
                capture_output=True,
                text=True,
                timeout=5
            )
            return {"stdout": result.stdout, "stderr": result.stderr}
        except subprocess.TimeoutExpired:
            return {"error": "Execution timed out"}
    return {"error": "Unsupported language"}
