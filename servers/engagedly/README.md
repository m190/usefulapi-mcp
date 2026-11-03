# Engagedly MCP by usefulapi

Use your [Engagedly](https://engagedly.com) account from Claude, Cursor, or any MCP client. Read employees, departments, learning progress, certificates and public praises, all read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://engagedly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://engagedly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http engagedly https://engagedly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=engagedly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fengagedly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "engagedly": {
      "url": "https://engagedly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Engagedly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/engagedly/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Engagedly Client Key** and **Engagedly Secret Key**, which a Site Administrator creates under **Integrations → Engagedly API**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `engagedly_list_users` | read | List users |
| `engagedly_get_user` | read | Get a user |
| `engagedly_get_user_permissions` | read | Get user permissions |
| `engagedly_list_user_attributes` | read | List user attributes |
| `engagedly_list_block_reason_codes` | read | List block reason codes |
| `engagedly_list_departments` | read | List departments |
| `engagedly_get_department` | read | Get department |
| `engagedly_list_businesses` | read | List businesses |
| `engagedly_get_business` | read | Get business |
| `engagedly_list_locations` | read | List locations |
| `engagedly_get_location` | read | Get location |
| `engagedly_list_job_titles` | read | List job titles |
| `engagedly_get_job_title` | read | Get job title |
| `engagedly_list_permissions` | read | List permissions |
| `engagedly_list_praises` | read | List public praises |
| `engagedly_list_learning_resources` | read | List learning resources |
| `engagedly_get_learning_resource_contents` | read | Get learning resource contents |
| `engagedly_get_learner_report` | read | Get learner report |
| `engagedly_list_certificates` | read | List certificates |
| `engagedly_get_certificate` | read | Get a certificate |
| `engagedly_usage_status` | meta | Usage status (free-tier meter) |
| `engagedly_request_feature` | meta | Request a missing feature |
| `engagedly_upgrade` | meta | Upgrade to Pro or Pro+ |
| `engagedly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `engagedly_upgrade` (it returns a Stripe Checkout link). Cancel any time with `engagedly_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `engagedly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
