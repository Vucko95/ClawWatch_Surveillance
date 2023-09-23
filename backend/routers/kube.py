
from fastapi import APIRouter, Depends
from settings.config import *
from kubernetes import config, client

router = APIRouter()

@router.get("/test")
async def testo():
    try:
        print('test')
        return 'Test'
    except Exception as e:
        print(f"An error occurred while processing the request: {str(e)}")
        return {"error": "An error occurred while processing the request"}
    

@router.get("/list")
async def testo():
    try:
        config.load_kube_config('kubeconfigs/test.yaml')
        v1 = client.CoreV1Api()
        namespaces = v1.list_namespace()
        return {"namespaces": [ns.metadata.name for ns in namespaces.items]}
    except Exception as e:
        print(f"An error occurred while processing the request: {str(e)}")
        return {"error": "An error occurred while processing the request"}