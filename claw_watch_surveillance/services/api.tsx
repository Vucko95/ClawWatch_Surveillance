
export const fetchDriverStandings = async () => {
    try {
    const response = await fetch('http://localhost:8000/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
  };

  export const fetchUploadedFiles = async () => {
    try {
      const response = await fetch("http://localhost:8000/getfiles");
      if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error("Failed to fetch uploaded files.");
      }
    } catch (error) {
      console.error("An error occurred while fetching uploaded files:", error);
    }
  };

  export const handleFileUpload = async (selectedFile : any) => {
    if (!selectedFile) {
      console.error("No file selected.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", selectedFile);
  
    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        console.log("File uploaded successfully!");
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("An error occurred while uploading the file:", error);
    }
  };

  export const fetchBaseK8SData = async (value : any) => {
    try {
      const response = await fetch(`http://localhost:8000/kubeconfig/${value}`);
      if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error("Failed to fetch uploaded files.");
      }
    } catch (error) {
      console.error("An error occurred while fetching uploaded files:", error);
    }
  };


  export const fetchK8sNamespaces = async (value : any) => {
    try {
      const response = await fetch(`http://localhost:8000/kubeconfig/ns/${value}`);
      if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error("Failed to fetch uploaded files.");
      }
    } catch (error) {
      console.error("An error occurred while fetching uploaded files:", error);
    }
  };
  export const fetchPodsforNamespace = async (namespace : any, harcoded_kubeconfig : any) => {
    try {
      const response = await fetch(`http://localhost:8000/kubeconfig/${harcoded_kubeconfig}/${namespace}/pods`);
      if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error("Failed to fetch uploaded files.");
      }
    } catch (error) {
      console.error("An error occurred while fetching uploaded files:", error);
    }
  };
