# ArborNote MCP by usefulapi

Use your [ArborNote](https://www.arbornote.com/) account from Claude, Cursor, or any MCP client. Reads clients, projects, proposals, work orders and crew hours, and adds clients and projects or updates proposals. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://arbornote.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://arbornote.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http arbornote https://arbornote.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=arbornote&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Farbornote.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "arbornote": {
      "url": "https://arbornote.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ArborNote credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/arbornote/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ArborNote API key** (ArborNote → Settings → API Access → Show Token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `arbornote_list_clients` | read | List clients |
| `arbornote_get_client` | read | Get a client |
| `arbornote_create_client` | **write** | Create a client |
| `arbornote_list_projects` | read | List projects |
| `arbornote_get_project` | read | Get a project |
| `arbornote_list_project_tags` | read | List project tags |
| `arbornote_create_project` | **write** | Create a project |
| `arbornote_list_proposals` | read | List proposals |
| `arbornote_get_proposal` | read | Get a proposal |
| `arbornote_set_proposal_number` | **write** | Set a proposal job number |
| `arbornote_set_proposal_status` | **write** | Set a proposal status |
| `arbornote_set_proposal_tax` | **write** | Set a proposal tax rate |
| `arbornote_list_work_orders` | read | List work orders |
| `arbornote_list_phc_work_orders` | read | List PHC work orders |
| `arbornote_list_crew_hours` | read | List crew hours |
| `arbornote_list_appointments` | read | List estimator appointments |
| `arbornote_usage_status` | meta | Usage status (free-tier meter) |
| `arbornote_request_feature` | meta | Request a missing feature |
| `arbornote_upgrade` | meta | Upgrade to Pro or Pro+ |
| `arbornote_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `arbornote_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `arbornote_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `arbornote_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
