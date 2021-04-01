---
title: 3D Underwater Terrain Modelling
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

Generation of 3D underwater terrain model from hydrographic chart to be connected to existing dryland terrain.

### Deliverables

- 3D model file (3ds, otherwise open to suggestion)
- Required layers:
  - Contour lines (closed planar 2D lines with elevation)
  - Underwater 3D terrain (3D mesh)

### Skills required

{% for skill in jobDetails.skills %}
- {{ skill }}
{% endfor %}

### Offer

{% include govbuy-offer-table.md 
  offer=jobDetails.offer duration=jobDetails.duration
  posted=jobDetails.posted closing=jobDetails.closing %}

### Evaluation methods

#### Milestone 1:

Briefing session to kickstart the task, including:

- Bidder to provide signed contract, NDA and bank account information
- GovTech to provide reference maps, files and detailed job information

**Payment upon acceptance of bid and milestone completion: S\$250**

#### Milestone 2:

Mid-point review, upon 50% completion of task:

- Evaluation committee to conduct a review at 50% completion of terrain modelling, or after 50% of timeline has elapsed, whichever is earlier
- Evaluation committee to ascertain at least 50% progress achieved according to requirements, ie:
  1. 3D model is submitted in the file format stated or mutually agreed upon
  2. GovTech is able to import 3D model with no issues and
  3. 3D model functions as expected

**Payment upon satisfactory milestone completion: S\$250**

#### Milestone 3:

Completion:

- Evaluation committee to ascertain 100% progress achieved according to requirements, ie:
  1. 3d model is submitted in the file format stated or mutually agreed upon
  2. GovTech is able to import 3d model with no issues and
  3. 3d model functions as expected
- Bidder to complete correction of any outstanding issues and ensure 3d model is submitted in the file format stated
- 3D mesh is clean of stray vertices
- Normals, scale and proportion are correct
- If stated, polygon count falls within acceptable range stated

**Payment upon satisfactory completion of all tasks: S\$500**

### The project

ODP: An [Open Digital Platform](https://www.tech.gov.sg/media/technews/building-an-operating-system-for-punggol-digital-district) that allows multiple systems and service providers to interface with one another and integrate their datasets and operations.

### The team

[The Punggol Digital District Team](https://www.tech.gov.sg/media/technews/building-an-operating-system-for-punggol-digital-district)
