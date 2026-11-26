# Microsoft Dynamics 365 MCP by usefulapi

Use your [Microsoft Dynamics 365](https://dynamics.microsoft.com) account from Claude, Cursor, or any MCP client. Read tables, columns and records, run FetchXML queries, and create or update records in Dataverse. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://microsoft-dynamics-365.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://microsoft-dynamics-365.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http microsoft-dynamics-365 https://microsoft-dynamics-365.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=microsoft-dynamics-365&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmicrosoft-dynamics-365.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "microsoft-dynamics-365": {
      "url": "https://microsoft-dynamics-365.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Microsoft Dynamics 365 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/microsoft-dynamics-365/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **environment URL**, the **directory (tenant) ID**, the **application (client) ID** and a **client secret** of a Microsoft Entra app (App registrations in Entra ID; the app is added as an Application User in the Power Platform admin center). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dynamics365_whoami` | read | Who am I |
| `dynamics365_list_tables` | read | List tables |
| `dynamics365_get_table_columns` | read | Get table columns |
| `dynamics365_list_records` | read | List records |
| `dynamics365_get_record` | read | Get record |
| `dynamics365_run_fetchxml` | read | Run FetchXML query |
| `dynamics365_create_record` | **write** | Create record |
| `dynamics365_update_record` | **write** | Update record |
| `dynamics365_usage_status` | meta | Usage status (free-tier meter) |
| `dynamics365_request_feature` | meta | Request a missing feature |
| `dynamics365_upgrade` | meta | Upgrade to Pro or Pro+ |
| `dynamics365_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `dynamics365_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `dynamics365_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `dynamics365_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
