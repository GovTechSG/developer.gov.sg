---
title: Security Benefits of using Infrastructure-as-Code
layout: layout-blog
author: Edmund Yeo
description: >
     Security Benefits of using IaC

tags:

  - security benefits
  - iac
  - infrastructure-as-code
  - container stack
  - cloud security
  - 
---

Infrastructure-as-Code (IaC) is the **process of provisioning and managing resources in public clouds using text files that describe infrastructure resource configurations**. It is a key feature of Container Stack (CStack), a cloud-based container hosting platform and one of the Runtime components within the Base Layer of the Singapore Government Tech Stack. Essentially, implementing IaC automates the management of an application’s tech stack and replaces manual effort required for resource management. Some examples of IaC tools include Terraform, Puppet, Ansible and Chef.

This article explains the importance of IaC by discussing its benefits and how it augments defence against risks.

![Security_benefits_img01](/assets/img/securitybenefits_iac01.png)

IaC is part of the Government Trust-based Architecture Framework, and its implementation fulfils the framework’s principle, Optimise with Automation & Orchestration, which aims to achieve the following:

• Fully automated process workflows which provide Continuous Integration and Continuous Delivery (CI/CD) of services built on repeatable
compliance baselines.

• Agility to accommodate change requests throughout the DevSecOps process. Key security components to securing IaC require its integration with a trusted CI/CD pipeline that checks for misconfigurations, non-compliance and security risks before code runtime.

![Security_benefits_img02](/assets/img/securitybenefits_iac02.png)

## HOW IaC AUGMENTS DEFENCE AGAINST RISKS

These are some examples of how implementing IaC can mitigate risks associated with the application development process.

![Security_benefits_img03](/assets/img/securitybenefits_iac03.png)
![Security_benefits_img04](/assets/img/securitybenefits_iac04.png)
![Security_benefits_img05](/assets/img/securitybenefits_iac05.png)

In summary, IaC helps improve developer productivity and prevents misconfigurations and other cloud-related risks. It is recommended to use IaC templates to bake in security controls and automate the consistent configuration baselines for hosting of workloads on cloud platforms.


