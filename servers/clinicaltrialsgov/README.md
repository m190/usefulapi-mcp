# ClinicalTrials.gov MCP by usefulapi

Search and read ClinicalTrials.gov studies, sites and outcomes. Hosted, no local install.

**Live endpoint:** `https://clinicaltrialsgov.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://clinicaltrialsgov.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http clinicaltrialsgov https://clinicaltrialsgov.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=clinicaltrialsgov&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclinicaltrialsgov.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "clinicaltrialsgov": {
      "url": "https://clinicaltrialsgov.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your email address and a 6-digit code.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/clinicaltrialsgov/

<!-- connect:end (generated above, edit below) -->

This server needs **no credential** — ClinicalTrials.gov is a public data source. On first
connect you log in with your email: we send a 6-digit code from `login@usefulapi.io`. The address
is used only to send the code; we keep a one-way hash of it as your account id, so your free calls
and your plan stay yours.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `search_studies` | read | Search clinical trials (ClinicalTrials.gov) |
| `get_study` | read | Get a clinical trial by NCT ID |
| `count_studies` | read | Count matching clinical trials |
| `list_field_values` | read | List value statistics for study fields |
| `get_study_metadata` | read | Get the study data-model (field tree) |
| `get_studies_stats` | read | Get study size statistics |
| `get_api_version` | read | Get the ClinicalTrials.gov API version |
| `clinicaltrialsgov_usage_status` | meta | Usage status (free-tier meter) |
| `clinicaltrialsgov_upgrade` | meta | Upgrade to Pro (unlimited) |
| `clinicaltrialsgov_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `clinicaltrialsgov_upgrade` (it returns a Stripe Checkout link). Cancel any time with `clinicaltrialsgov_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `clinicaltrialsgov_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
