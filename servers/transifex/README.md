# Transifex MCP by usefulapi

Use your [Transifex](https://www.transifex.com) account from Claude, Cursor, or any MCP client. It reads projects, resources, source strings, translation progress, tasks and glossaries, and it can create a project. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://transifex.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://transifex.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http transifex https://transifex.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=transifex&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftransifex.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "transifex": {
      "url": "https://transifex.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Transifex credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/transifex/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Transifex API token** (User settings → API token in Transifex). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `transifex_get_user` | read | Get a user |
| `transifex_list_organizations` | read | List organizations |
| `transifex_get_organization` | read | Get an organization |
| `transifex_list_projects` | read | List projects |
| `transifex_get_project` | read | Get a project |
| `transifex_create_project` | **write** | Create a project |
| `transifex_list_languages` | read | List languages |
| `transifex_list_resources` | read | List resources |
| `transifex_get_resource` | read | Get a resource |
| `transifex_list_resource_strings` | read | List source strings |
| `transifex_list_resource_language_stats` | read | List translation progress |
| `transifex_list_tasks` | read | List tasks |
| `transifex_get_task` | read | Get a task |
| `transifex_list_glossaries` | read | List glossaries |
| `transifex_usage_status` | meta | Usage status (free-tier meter) |
| `transifex_request_feature` | meta | Request a missing feature |
| `transifex_upgrade` | meta | Upgrade to Pro or Pro+ |
| `transifex_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `transifex_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `transifex_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `transifex_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
