from fastapi import FastAPI
from routers import kube
from fastapi.middleware.cors import CORSMiddleware
from settings.config import *
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

routers = [kube.router]
for router in routers:
    app.include_router(router) 