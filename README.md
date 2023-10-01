# "Claw Kube Surveillance" Kubernetes Management Web Application

[![Stack](https://skills.thijs.gg/icons?i=py,kubernetes,next,ts&theme=dark)](https://skills.thijs.gg)


Claw Kube Surveillance is a Kubernetes Management Web Application, a platform that allows users to easily manage and monitor Kubernetes clusters using a web-based interface. This application provides a range of features to streamline Kubernetes administration tasks.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Functionality](#functionality)
- [Contributing](#contributing)
- [License](#license)

## Features

 Claw Kube Surveillance offers a comprehensive set of features:

- **Add and Manage Kubeconfigs**: Easily add and manage multiple Kubeconfigs, making it simple to switch between Kubernetes clusters.

- **Cluster Information**: Retrieve essential information about your Kubernetes clusters, including nodes, namespaces, deployments, and more.

- **Pod Management**: List pods for specific namespaces and monitor their status.

- **Alerting**: Set up Slack or Microsoft Teams alerts for pods in case they go down or encounter issues.


## Screenshots

<div style="text-align:center;">
  <img src="/img/claw.png" alt="Home Screen">
  <img src="/img/claw2.png" alt="Home Screen">
</div>

## Technologies Used

Our application leverages the following technologies:

- **Frontend**: Next.js
- **Backend**: Python Fastapi
- **Kubernetes Python Client**: https://github.com/kubernetes-client/python
- **Slack and Microsoft Teams APIs**: Integrated for alerting functionality.



## Contributing

We welcome contributions from the community to enhance the Kubernetes Management Web Application. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or improvement.
3. Make your changes and ensure that the code passes any existing tests.
4. Open a pull request, explaining your changes and their benefits.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as per the terms of the license.
