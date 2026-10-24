# Click2Mail MCP by usefulapi

Read Click2Mail credit, jobs, costs and tracking; upload documents, create and submit mail jobs.

**Live endpoint:** `https://click2mail.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/click2mail

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://click2mail.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http click2mail https://click2mail.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=click2mail&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclick2mail.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "click2mail": {
      "url": "https://click2mail.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Click2Mail credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/click2mail/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your Click2Mail Business account **username** and **password** (production login, with API access switched on under Profile & Preferences → API access).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `click2mail_get_credit` | read | Get account credit |
| `click2mail_list_return_addresses` | read | List saved account addresses |
| `click2mail_get_product_options` | read | Get product options |
| `click2mail_estimate_cost` | read | Estimate mailing cost |
| `click2mail_list_documents` | read | List documents |
| `click2mail_get_address_list` | read | Get address list status |
| `click2mail_get_address_list_info` | read | Get address list details |
| `click2mail_check_addresses` | read | Check and correct addresses |
| `click2mail_create_address_list` | **write** | Create address list |
| `click2mail_upload_document_from_url` | **write** | Upload document from URL |
| `click2mail_list_projects` | read | List projects |
| `click2mail_list_project_jobs` | read | List jobs in a project |
| `click2mail_list_jobs_by_app_signature` | read | List jobs by app signature |
| `click2mail_get_job_status` | read | Get job status |
| `click2mail_get_job_info` | read | Get job details |
| `click2mail_get_job_tracking` | read | Get job tracking |
| `click2mail_get_job_cost` | read | Get job cost |
| `click2mail_create_job` | **write** | Create job (draft) |
| `click2mail_request_job_proof` | **write** | Request job proof |
| `click2mail_submit_job` | **write** | Submit job (spends money) |
| `click2mail_cancel_job` | **write** | Cancel submitted job |
| `click2mail_delete_job` | **write** | Delete draft job |
| `click2mail_usage_status` | meta | Usage status (free-tier meter) |
| `click2mail_request_feature` | meta | Request a missing feature |
| `click2mail_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `click2mail_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `click2mail_upgrade` (it returns a Stripe Checkout link). Cancel any time with `click2mail_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `click2mail_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Click2Mail.
