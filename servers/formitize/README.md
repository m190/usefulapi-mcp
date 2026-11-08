# Formitize MCP by usefulapi

Use your [Formitize](https://www.formitize.com) account from Claude, Cursor, or any MCP client. Read jobs, form templates, submitted forms, assets and CRM tasks, and create or update CRM tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://formitize.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://formitize.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http formitize https://formitize.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=formitize&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fformitize.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "formitize": {
      "url": "https://formitize.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Formitize credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/formitize/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Formitize API token** (Formitize → Settings → API → API Tokens, with the forms read permission). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `formitize_list_jobs` | read | List jobs |
| `formitize_get_job` | read | Get a job |
| `formitize_get_job_history` | read | Get job history |
| `formitize_list_form_templates` | read | List form templates |
| `formitize_get_form_template` | read | Get a form template |
| `formitize_list_submitted_forms` | read | List submitted forms |
| `formitize_get_submitted_form` | read | Get a submitted form |
| `formitize_list_asset_types` | read | List asset types |
| `formitize_list_assets` | read | List assets |
| `formitize_get_asset` | read | Get an asset |
| `formitize_list_lookup_databases` | read | List lookup databases |
| `formitize_list_tasks` | read | List CRM tasks |
| `formitize_get_task` | read | Get a CRM task |
| `formitize_create_task` | **write** | Create a CRM task |
| `formitize_update_task` | **write** | Update a CRM task |
| `formitize_usage_status` | meta | Usage status (free-tier meter) |
| `formitize_request_feature` | meta | Request a missing feature |
| `formitize_upgrade` | meta | Upgrade to Pro or Pro+ |
| `formitize_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `formitize_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `formitize_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `formitize_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
