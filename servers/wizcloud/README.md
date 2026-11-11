# WizCloud MCP by usefulapi

Use your [WizCloud](https://h-erp.co.il) account from Claude, Cursor, or any MCP client. Run saved reports, read documents, and create temporary documents and journal batches. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wizcloud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wizcloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wizcloud https://wizcloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wizcloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwizcloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wizcloud": {
      "url": "https://wizcloud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WizCloud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wizcloud/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **server** (the part before `.wizcloud.co.il` in your WizCloud address, for example `lb1`), your **database name** (`wizdb…`, shown when you hover over the company in your company list) and your **API token** (issued by your WizCloud administrator for your Gmail user). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wizcloud_list_companies` | read | List companies |
| `wizcloud_export_report` | read | Run a saved report |
| `wizcloud_list_trigger_urls` | read | List trigger addresses |
| `wizcloud_get_document` | read | Get a document |
| `wizcloud_check_journal_batch` | read | Check a journal batch |
| `wizcloud_create_temp_document` | **write** | Create a temporary document |
| `wizcloud_create_temp_journal_batch` | **write** | Create a temporary journal batch |
| `wizcloud_usage_status` | meta | Usage status (free-tier meter) |
| `wizcloud_request_feature` | meta | Request a missing feature |
| `wizcloud_upgrade` | meta | Upgrade to Pro or Pro+ |
| `wizcloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `wizcloud_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `wizcloud_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `wizcloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
