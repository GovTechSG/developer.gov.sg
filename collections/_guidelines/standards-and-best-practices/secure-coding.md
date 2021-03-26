--- 
title: Secure Coding 
layout: layout-page-sidenav
category: Standards and Best Practices 
description: > 
  This page will introduce secure coding, highlight best practices, discuss security aspects of popular frameworks and finally, share some resources that developers can use to improve their secure coding skills.
--- 
## **What is secure coding?**

Secure coding is the practice of developing computer software in a manner that avoids the unintentional introduction of security vulnerabilities. This is a method of coding that ALL software developers should be familiar with.

Software developed with security in mind helps safeguard against [common attacks](https://owasp.org/www-project-top-ten/) such as buffer overflows, SQL injection, and cross-site scripting.

  

## **How can I code securely?**

To help developers to approach software development with security in mind, there is this article from the Open Web Application Security Project (OWASP): “[Top Ten Proactive Controls 2018](https://owasp.org/www-project-proactive-controls/)” which features a list of security techniques that should be included in every software development project:

*   C1: Define Security Requirements
    
*   C2: Leverage Security Frameworks and Libraries
    
*   C3: Secure Database Access
    
*   C4: Encode and Escape Data
    
*   C5: Validate All Inputs
    
*   C6: Implement Digital Identity
    
*   C7: Enforce Access Controls
    
*   C8: Protect Data Everywhere
    
*   C9: Implement Security Logging and Monitoring
    
*   C10: Handle All Errors and Exceptions
    

  

## **Are web frameworks secure? How can I implement security?**

Web frameworks such as Django, Rails, Spring, and Express are popular among web developers because they have a large ecosystem of open source libraries. These popular frameworks make it easier for developers to avoid many common vulnerabilities as they provide many built-in security features, or have libraries that do so. However, the use of popular web frameworks does not automatically make the web application secure. It is important to understand the security features provided by these frameworks, how to enable or use them properly, and the limits of these features.

For starters, Mozilla provides a [Web Security Cheat Sheet](https://infosec.mozilla.org/guidelines/web_security) which serves as a reference guide for its development team. The guide illustrates the level of security benefit and implementation difficulty of each guideline. For specific framework’s security implementations, developers can refer to the following resources to implementing security in applications:

*   **Django** provides documentation on its [security features](https://docs.djangoproject.com/en/3.1/topics/security/) as well as a [deployment checklist](https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/) which automates some of the security checks.
    
*   **Rails** has a [manual](https://guides.rubyonrails.org/security.html) that describes common security problems in web applications and how to avoid them. OWASP also provides quick basic Ruby on Rails [security tips](https://cheatsheetseries.owasp.org/cheatsheets/Ruby_on_Rails_Cheat_Sheet.html) for developers.
    
*   **[Spring](https://docs.spring.io/spring-security/site/docs/current/reference/html5/)** [Security](https://docs.spring.io/spring-security/site/docs/current/reference/html5/) is a framework that provides comprehensive support for authentication, authorisation, and protection against common exploits for Spring-based applications.
    
*   **Express** has an article on [best security practices](https://expressjs.com/en/advanced/best-practice-security.html) for its applications in production. OWASP also has recommended actions that developers can take to develop [secure Node.js applications](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html).
    

In addition, developers can use the [Observatory by Mozilla](https://observatory.mozilla.org/) site to scan the security status of their deployed site and learn how to configure their sites securely.

  

## **Where can I learn more about secure coding?**

*   The [OWASP Secure Coding Dojo](https://owasp.org/www-project-secure-coding-dojo/) is a training platform for developers to  practise their skills. There is also a [tool](https://owasp.org/www-project-dependency-check/) that looks for dependencies and publicly disclosed vulnerabilities.
    
*   Microsoft’s guide on secure coding: [https://msdn.microsoft.com/en-us/aa570401](https://msdn.microsoft.com/en-us/aa570401).
    
*   Books on secure coding techniques such as “24 Deadly Sins of Software Security” and “Secure Coding: Principles and Practices”.
    
*   Secure coding standards such as [SEI CERT](https://wiki.sei.cmu.edu/confluence/display/seccode/SEI+CERT+Coding+Standards) – which is overseen by Carnegie Mellon University- offers support and guidance in secure coding for a variety of programming languages.
    
*   Secure coding tutorials from [RedHat](https://developers.redhat.com/topics/secure-coding).
