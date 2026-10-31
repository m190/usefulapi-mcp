# CATS MCP server

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cats-ats.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cats-ats https://cats-ats.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cats-ats&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcats-ats.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cats-ats": {
      "url": "https://cats-ats.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CATS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cats-ats/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cats_get_site` | read | Get CATS site |
| `cats_list_users` | read | List users |
| `cats_list_candidates` | read | List candidates |
| `cats_get_candidate` | read | Get candidate |
| `cats_search_candidates` | read | Search candidates |
| `cats_filter_candidates` | read | Filter candidates |
| `cats_list_candidate_pipelines` | read | List a candidate's pipelines |
| `cats_list_candidate_activities` | read | List a candidate's activities |
| `cats_list_candidate_tasks` | read | List a candidate's tasks |
| `cats_list_candidate_attachments` | read | List a candidate's attachments (metadata) |
| `cats_list_jobs` | read | List jobs |
| `cats_get_job` | read | Get job |
| `cats_search_jobs` | read | Search jobs |
| `cats_list_job_pipelines` | read | List a job's pipeline |
| `cats_list_job_statuses` | read | List job statuses |
| `cats_list_pipelines` | read | List pipelines |
| `cats_get_pipeline` | read | Get pipeline |
| `cats_filter_pipelines` | read | Filter pipelines |
| `cats_get_pipeline_status_history` | read | Get pipeline status history |
| `cats_list_workflows` | read | List pipeline workflows |
| `cats_list_workflow_statuses` | read | List workflow statuses |
| `cats_list_companies` | read | List companies |
| `cats_get_company` | read | Get company |
| `cats_search_companies` | read | Search companies |
| `cats_list_contacts` | read | List contacts |
| `cats_get_contact` | read | Get contact |
| `cats_search_contacts` | read | Search contacts |
| `cats_list_tasks` | read | List tasks |
| `cats_get_task` | read | Get task |
| `cats_list_activities` | read | List activities |
| `cats_add_candidate_activity` | **write** | Add an activity (note) to a candidate |
| `cats_create_task` | **write** | Create a task |
| `cats_change_pipeline_status` | **write** | Move a candidate to another pipeline status |
| `cats_create_candidate` | **write** | Create a candidate |
| `cats_usage_status` | meta | Usage status (free-tier meter) |
| `cats_request_feature` | meta | Request a missing feature |
| `cats_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `cats_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per connected CATS site) | $0 | 50 tool calls / month |
| **Pro** (per connected CATS site) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `cats_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cats_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cats_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT

## Access, personal data and limits

Create a v3 API key in CATS under Administration → API Keys. Legacy Transaction Codes do not work. The generation form offers no read-only scope selector. Authorize UsefulAPI and your selected AI client to process only data you are entitled to share. CATS account eligibility and vendor charges remain separate from UsefulAPI plans. This independent connector makes no claim of vendor approval or endorsement.

Candidate/contact records contain personal information. Do not use this workflow for government IDs, health data, personal financial information or other CATS Prohibited Data. Known credential and sensitive financial/health fields and HAL link blocks are filtered; customers must still review free text and custom fields. Tool results reach your chosen AI client and LLM provider, whose privacy and retention policies also apply. Revoke the API key in CATS to stop vendor access; disconnect UsefulAPI to end this connection.

CATS documents a rolling 500 API requests/hour limit; its counter scope is not specified. Collection pages default to 25, maximum 100. Authentication is capped at 10 seconds/64 KiB; operation replies at 30 seconds/8 MiB. Billing follows the verified CATS site ID, so rotation of a key within the same site keeps the account identity.

## Changes and automation

All four writes require confirm:true: create a candidate, log candidate activity, create a task or change pipeline status. Assigned tasks may notify a user. No email/SMS-send request is made by an activity note, even when its activity type is email or text_message. Independently configured account automation and webhooks can still react to changes.

Pipeline moves read the workflow/status metadata, explicitly request every returned trigger be suppressed with fire:false, and send create_activity=false. An already-current status makes no write. Preflight reads are not an atomic lock, so concurrent changes remain possible; independent webhooks are not suppressed. No email delivery, delete, attachment download, bulk-export endpoint or webhook-management tool is exposed.

No vendor request is automatically replayed. Creates require the documented 201 and a matching Location record ID; inconsistent or uncertain acknowledgements are errors. Inspect CATS before retrying a write. Date-only task/activity dates are sent at midnight UTC.

## Verification

The 34 vendor tools were checked against the current API reference and local mocks. Actual own-trial reads verified account identity and HAL response structures, including vendor-supplied sample records. No real customer recruiting records or business writes were tested. Current terms allow customer-directed third-party software, and the vendor publishes external API-key setup guidance; this does not assert CATS reviewed UsefulAPI.

References: [API v3](https://docs.catsone.com/api/v3/), [terms](https://catsone.com/terms-and-conditions/), [external-key setup](https://help.catsone.com/article/198-linkmatch).
