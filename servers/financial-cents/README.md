# Financial Cents MCP by usefulapi

Use your [Financial Cents](https://www.financial-cents.com) account from Claude, Cursor, or any MCP client. It reads clients, contacts, projects and templates, and creates clients, contacts and template projects. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://financial-cents.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://financial-cents.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http financial-cents https://financial-cents.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=financial-cents&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffinancial-cents.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "financial-cents": {
      "url": "https://financial-cents.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Financial Cents credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/financial-cents/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Financial Cents personal access token** (Settings → API Settings → New Token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `financialcents_list_clients` | read | List clients |
| `financialcents_get_client` | read | Get a client |
| `financialcents_list_client_contacts` | read | List a client's contacts |
| `financialcents_list_client_resources` | read | List a client's links and files |
| `financialcents_list_contacts` | read | List contacts |
| `financialcents_get_contact` | read | Get a contact |
| `financialcents_list_projects` | read | List projects |
| `financialcents_list_project_resources` | read | List a project's links and files |
| `financialcents_list_templates` | read | List project templates |
| `financialcents_list_users` | read | List team members |
| `financialcents_create_client` | **write** | Create a client |
| `financialcents_update_client` | **write** | Rename a client |
| `financialcents_create_client_contact` | **write** | Add a contact to a client |
| `financialcents_update_contact` | **write** | Update a contact |
| `financialcents_create_project_from_template` | **write** | Create a project from a template |
| `financialcents_usage_status` | meta | Usage status (free-tier meter) |
| `financialcents_request_feature` | meta | Request a missing feature |
| `financialcents_upgrade` | meta | Upgrade to Pro or Pro+ |
| `financialcents_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `financialcents_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `financialcents_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `financialcents_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
