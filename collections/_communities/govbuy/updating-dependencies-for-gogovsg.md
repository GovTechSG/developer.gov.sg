---
title: Updating dependencies for GoGovSG
layout: layout-page-sidenav
---

{% assign jobDetails = site.data.gigs | where: "title", page.title | first %}

{% unless jobDetails.open %}
**The bidding period for this job is over**
{% else %}
<a href="{{ jobDetails.bid_link }}" class="sgds-button is-primary">
  Submit your bid here
</a>
{% endunless %}


### The task

As part of efforts to enable automatic updates to our dependencies, we need to first do a manual one-off update and verify that GoGovSG still works. This will be done in phases, starting with all dependencies relating to linting.

[View the issue on GitHub](https://github.com/opengovsg/GoGovSG/issues/208)

### The project

[go.gov.sg](https://go.gov.sg), the official Singapore government link shortener, built by the Open Government Products team in GovTech.

### The team

[Open Government Products](https://open.gov.sg/)

### Deliverables

Dependencies relating to ESLint - including ESLint itself, configs and plugins - should be updated to the latest versions in a single PR, with checks to ensure that linting continues to work for the core engineering team.

The PR should also resolve GitHub issue [#161](https://github.com/opengovsg/GoGovSG/issues/161) by adding the appropriate ESLint plugin. Ensure changes to code via linting, if any, are within reason and documented

### Skills required

{% for skill in jobDetails.skills %}
- {{ skill }}
{% endfor %}

### Offer

{% include govbuy-offer-table.md 
  offer=jobDetails.offer duration=jobDetails.duration
  posted=jobDetails.posted closing=jobDetails.closing %}

### Evaluation methods

PR passes all checks and review on the [GoGovSG GitHub repo](https://github.com/opengovsg/GoGovSG)
