---
title: Freelance Content Writer
layout: layout-page-sidenav
---

{% assign jobDetails = site.data.gigs | where: "title", page.title | first %}

{% unless jobDetails.open %}
**The bidding period for this job is over**
{% else %}
{% endunless %}

### Task

To craft informative and easily digestible articles for the Singapore Government Developer Portal (SGDP) based on GovTech’s community engagement events and products/services. The candidate will be required to understand and make sense of technical content for the articles.

- 1,200 – 1,500 words
- Stylistically similar to the piece [here](https://medium.com/ndi-sg/stack-x-webinar-national-digital-identity-stack-introduction-to-ndi-34b5dbed9565)

### Timeline

- Two articles for publication on SGDP
  - Publication-ready drafts in Word Doc to be submitted
  within 7 days from first kick-off meeting
- Option for additional two articles for publication on SGDP
  - Publication-ready drafts in Word Doc to be submitted within 7 days from first kick-off meeting for each article

### Deliverables

- Article 1:
  - Output: Product white-paper on [HealthCerts](https://www.developer.tech.gov.sg/technologies/digital-solutions-to-address-covid-19/healthcerts)
  - Sources: Video recording of a webinar, existing write-ups/product details will be provided
- Article 2:
  - Output: Opinion editorial
  - Sources: Interview to be conducted

### Skills required

{% for skill in jobDetails.skills %}
- {{ skill }}
{% endfor %}

### Offer

{% include govbuy-offer-table.md
  offer=jobDetails.offer duration=jobDetails.duration
  posted=jobDetails.posted closing=jobDetails.closing %}

### Additional information needed

- CV
- Writing portfolio with minimally three articles ranging from 1,000 to 2,000 words; tech content writing is a plus (published content is preferred)
<a href="{{ jobDetails.bid_link }}" class="sgds-button is-primary">
  Submit your application here
</a>
