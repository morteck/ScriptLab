from fastapi import FastAPI
from api.run_script import router as run_router

app = FastAPI(title="ScriptLab API")

app.include_router(run_router, prefix="/api")
