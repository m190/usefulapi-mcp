# Simplicate MCP by usefulapi

Use your [Simplicate](https://www.simplicate.com) account from Claude, Cursor, or any MCP client. Read organizations, persons, sales, projects, invoices and hours, and create organizations, persons and timeline notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://simplicate.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://simplicate.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http simplicate https://simplicate.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=simplicate&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsimplicate.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "simplicate": {
      "url": "https://simplicate.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Simplicate credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/simplicate/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Simplicate subdomain** (the part before .simplicate.nl), an **API key** and an **API secret** (General settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `simplicate_list_organizations` | read | List organizations |
| `simplicate_get_organization` | read | Get an organization |
| `simplicate_list_persons` | read | List persons |
| `simplicate_get_person` | read | Get a person |
| `simplicate_list_relation_types` | read | List relation types |
| `simplicate_list_sales` | read | List sales deals |
| `simplicate_get_sale` | read | Get a sales deal |
| `simplicate_list_projects` | read | List projects |
| `simplicate_get_project` | read | Get a project |
| `simplicate_list_invoices` | read | List invoices |
| `simplicate_get_invoice` | read | Get an invoice |
| `simplicate_list_hours` | read | List hours registrations |
| `simplicate_list_employees` | read | List employees |
| `simplicate_list_timeline_messages` | read | List timeline messages |
| `simplicate_list_timeline_message_types` | read | List timeline message types |
| `simplicate_create_organization` | **write** | Create an organization |
| `simplicate_create_person` | **write** | Create a person |
| `simplicate_create_timeline_note` | **write** | Add a timeline note |
| `simplicate_usage_status` | meta | Usage status (free-tier meter) |
| `simplicate_request_feature` | meta | Request a missing feature |
| `simplicate_upgrade` | meta | Upgrade to Pro or Pro+ |
| `simplicate_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `simplicate_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `simplicate_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `simplicate_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
