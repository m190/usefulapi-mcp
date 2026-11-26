# Lucca MCP by usefulapi

Use your [Lucca](https://www.lucca.fr) account from Claude, Cursor, or any MCP client. It reads employees, employments, job positions, legal entities, sites and departments, and it creates or updates departments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://lucca.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lucca.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lucca https://lucca.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lucca&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flucca.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lucca": {
      "url": "https://lucca.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Lucca credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lucca/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Lucca account name** (the part before .ilucca.net), the **environment** (Production, Test or Demo), the **region** (Europe or Switzerland), and the **client id** and **client secret** of an integration key that you create at /identity/admin/integration-keys (administrator rights needed). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lucca_list_employees` | read | List employees |
| `lucca_get_employee` | read | Get employee |
| `lucca_list_employments` | read | List employments |
| `lucca_get_employment` | read | Get employment |
| `lucca_list_job_positions` | read | List job positions |
| `lucca_list_legal_entities` | read | List legal entities |
| `lucca_list_business_establishments` | read | List business establishments |
| `lucca_list_departments` | read | List departments |
| `lucca_get_department` | read | Get department |
| `lucca_list_taxonomy_labels` | read | List taxonomy labels |
| `lucca_create_department` | **write** | Create department |
| `lucca_update_department` | **write** | Update department |
| `lucca_usage_status` | meta | Usage status (free-tier meter) |
| `lucca_request_feature` | meta | Request a missing feature |
| `lucca_upgrade` | meta | Upgrade to Pro or Pro+ |
| `lucca_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `lucca_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `lucca_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `lucca_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
