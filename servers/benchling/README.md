# Benchling MCP by usefulapi

Use your [Benchling](https://www.benchling.com) account from Claude, Cursor, or any MCP client. Read projects, folders, notebook entries, DNA sequences, registries, users and teams, and create folders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://benchling.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://benchling.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http benchling https://benchling.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=benchling&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbenchling.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "benchling": {
      "url": "https://benchling.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Benchling credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/benchling/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **tenant** (the part before .benchling.com in your Benchling address) and a **personal API key** (Profile Settings → API key in Benchling). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `benchling_list_projects` | read | List projects |
| `benchling_get_project` | read | Get a project |
| `benchling_list_folders` | read | List folders |
| `benchling_get_folder` | read | Get a folder |
| `benchling_list_entries` | read | List notebook entries |
| `benchling_get_entry` | read | Get a notebook entry |
| `benchling_list_dna_sequences` | read | List DNA sequences |
| `benchling_get_dna_sequence` | read | Get a DNA sequence |
| `benchling_list_registries` | read | List registries |
| `benchling_list_users` | read | List users |
| `benchling_get_user` | read | Get a user |
| `benchling_list_teams` | read | List teams |
| `benchling_create_folder` | **write** | Create a folder |
| `benchling_usage_status` | meta | Usage status (free-tier meter) |
| `benchling_request_feature` | meta | Request a missing feature |
| `benchling_upgrade` | meta | Upgrade to Pro or Pro+ |
| `benchling_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `benchling_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `benchling_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `benchling_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
