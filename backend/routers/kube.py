
from fastapi import APIRouter, Depends
from settings.config import *
from kubernetes import config, client,utils
from kubernetes.client.rest import ApiException
from kubernetes.client import CustomObjectsApi   
import yaml
from fastapi import UploadFile
router = APIRouter()
import os
@router.post("/upload")
async def upload_file(file: UploadFile):
    try:
        upload_dir = "kubeconfigs"
        os.makedirs(upload_dir, exist_ok=True)
        file_path = os.path.join(upload_dir, file.filename)
        with open(file_path, "wb") as f:
            f.write(file.file.read())
        print(f"Uploaded file: {file.filename}")

        return {"message": "File uploaded successfully"}
    except Exception as e:
        print(f"An error occurred while processing the file: {str(e)}")
        return {"error": "An error occurred while processing the file"} 



@router.get("/getfiles")
async def get_uploaded_files():
    try:
        upload_dir = "kubeconfigs"
        files = os.listdir(upload_dir)
        return  files
    except Exception as e:
        print(f"An error occurred while fetching uploaded files: {str(e)}")
        return {"error": "An error occurred while fetching uploaded files"}



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
        # v1 = client.CoreV1Api()
        # namespaces = v1.list_namespace()
        nodesList=list_nodes()
        numberOfPods=get_total_number_of_pods()
        numOfDep=get_total_number_of_deployments()
        clusterUptime =get_cluster_uptime()
        results = {
            "nodesList": nodesList,
            "numberOfPods": numberOfPods,
            "numOfDep": numOfDep,
            "clusterUptime": clusterUptime
        }
        return results
    except Exception as e:
        print(f"An error occurred while processing the request: {str(e)}")
        return {"error": "An error occurred while processing the request"}


@router.get("/kubeconfig/{value}")
async def testo(value: str):
    try:
        kubeconfig_path = f'kubeconfigs/{value}'
        config.load_kube_config(kubeconfig_path)
        nodesList = list_nodes()
        numberOfPods = get_total_number_of_pods()
        numOfDep = get_total_number_of_deployments()
        clusterUptime = get_cluster_uptime()
        results =   {

            "nodesList": nodesList,
            "numberOfPods": numberOfPods,
            "numOfDep": numOfDep,
            "clusterUptime": clusterUptime 
        }
            
        
        return results
    except Exception as e:
        print(f"An error occurred while processing the request: {str(e)}")
        return {"error": "An error occurred while processing the request"}   



config.load_kube_config('kubeconfigs/test.yaml')

# v1 = client.CoreV1Api()
# print("Listing pods with their IPs:")
# ret = v1.list_pod_for_all_namespaces(watch=False)
# for i in ret.items:
#     print("%s\t%s\t%s" % (i.status.pod_ip, i.metadata.namespace, i.metadata.name))


def create_nginx_pod():
    try:
        # Load Kubernetes configuration from a kubeconfig file
        config.load_kube_config('kubeconfigs/test.yaml')

        # Create a Kubernetes API client
        api_client = client.ApiClient()

        # Define the Nginx pod specification
        nginx_pod = {
            "apiVersion": "v1",
            "kind": "Pod",
            "metadata": {"name": "nginx-pod"},
            "spec": {
                "containers": [
                    {
                        "name": "nginx",
                        "image": "nginx",
                        "ports": [{"containerPort": 80}],
                    }
                ]
            },
        }

        # Create the Nginx pod in the default namespace
        api_instance = client.CoreV1Api(api_client)
        api_instance.create_namespaced_pod(
            namespace="default", body=nginx_pod
        )

        print("Nginx pod created successfully.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
# if __name__ == '__main__':
#     main()


def get_cluster_resource_usage():
    try:
        # Load Kubernetes configuration from a kubeconfig file
        config.load_kube_config('kubeconfigs/test.yaml')

        api = client.CustomObjectsApi()
        resource = api.list_namespaced_custom_object(group="metrics.k8s.io",version="v1beta1", namespace="default", plural="pods")
        for pod in resource["items"]:
            print(pod['containers'], "\n")
    except ApiException as e:
        print(f"Exception when calling Kubernetes API: {e}")


def list_nodes():
        config.load_kube_config('kubeconfigs/test.yaml')

        api_client = client.ApiClient()
        api_instance = client.CoreV1Api(api_client)
        # api_response=api_instance.read_namespaced_pod(namespace="default",name="nginx-pod")
        node_list=api_instance.list_node()
        print(len(node_list.items))
        return (len(node_list.items))
    
def get_total_number_of_pods():
    try:
        # Load Kubernetes configuration from a kubeconfig file
        config.load_kube_config('kubeconfigs/test.yaml')

        # Create a Kubernetes API client
        api_client = client.ApiClient()

        # Create an instance of the CoreV1Api class
        api_instance = client.CoreV1Api(api_client)

        # Get a list of pods in all namespaces
        pod_list = api_instance.list_pod_for_all_namespaces()

        # Return the total number of pods
        print(len(pod_list.items))
        return len(pod_list.items)
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None
    
def get_total_number_of_deployments():
    try:
        # Load Kubernetes configuration from a kubeconfig file
        config.load_kube_config('kubeconfigs/test.yaml')

        # Create a Kubernetes API client
        api_client = client.ApiClient()

        # Create an instance of the AppsV1Api class for working with Deployments
        apps_api_instance = client.AppsV1Api(api_client)

        # Get a list of all deployments in all namespaces
        deployment_list = apps_api_instance.list_deployment_for_all_namespaces()

        # Return the total number of deployments
        print(len(deployment_list.items))
        return len(deployment_list.items)
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None
    
from datetime import datetime

def get_cluster_uptime():
    try:
        # Load Kubernetes configuration from a kubeconfig file
        config.load_kube_config('kubeconfigs/test.yaml')

        # Create a Kubernetes API client
        api_client = client.ApiClient()

        # Create an instance of the CoreV1Api class
        api_instance = client.CoreV1Api(api_client)

        # Get the creation time of a specific namespace (e.g., "default")
        namespace = "default"
        namespace_info = api_instance.read_namespace(name=namespace)
        creation_timestamp = namespace_info.metadata.creation_timestamp

        # Calculate uptime as the time elapsed since the creation timestamp
        current_time = datetime.now(creation_timestamp.tzinfo)
        uptime = current_time - creation_timestamp
        formatted_uptime = format_uptime(uptime)

        # Return the uptime duration
        print(formatted_uptime)
        return formatted_uptime
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None
    
def format_uptime(uptime):
    total_seconds = uptime.total_seconds()
    hours, remainder = divmod(total_seconds, 3600)
    minutes, _ = divmod(remainder, 60)
    return f"{int(hours):02}:{int(minutes):02}"
