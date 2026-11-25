# Sendspark MCP by usefulapi

Use your [Sendspark](https://sendspark.com) account from Claude, Cursor, or any MCP client. Read campaigns, prospects, transcripts and webhooks, and create campaigns or add prospects. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sendspark.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sendspark.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sendspark https://sendspark.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sendspark&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsendspark.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sendspark": {
      "url": "https://sendspark.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sendspark credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sendspark/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Sendspark API key** and **API secret** (API Credentials in Sendspark; the secret is shown only once). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sendspark_get_workspace_id` | read | Get workspace id for the API key |
| `sendspark_list_workspaces` | read | List workspaces |
| `sendspark_list_dynamic_campaigns` | read | List dynamic video campaigns |
| `sendspark_get_dynamic_campaign` | read | Get a dynamic video campaign |
| `sendspark_get_dynamics_settings` | read | Get dynamic video settings |
| `sendspark_get_prospect` | read | Get a prospect in a campaign |
| `sendspark_get_transcript_status` | read | Get video transcript status |
| `sendspark_get_transcript` | read | Get a video transcript |
| `sendspark_list_webhooks` | read | List webhooks |
| `sendspark_get_webhook` | read | Get a webhook |
| `sendspark_create_dynamic_campaign` | **write** | Create a dynamic video campaign |
| `sendspark_add_prospect` | **write** | Add a prospect and generate its video |
| `sendspark_usage_status` | meta | Usage status (free-tier meter) |
| `sendspark_request_feature` | meta | Request a missing feature |
| `sendspark_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sendspark_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sendspark_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sendspark_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sendspark_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
