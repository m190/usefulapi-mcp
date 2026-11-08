# Castos MCP by usefulapi

Use your [Castos](https://castos.com) account from Claude, Cursor, or any MCP client. Read podcasts and episodes, create and update episodes, and manage private subscribers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://castos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://castos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http castos https://castos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=castos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcastos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "castos": {
      "url": "https://castos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Castos credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/castos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Castos API token** (account avatar → Account Settings → Publish Settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `castos_list_podcasts` | read | List podcasts |
| `castos_get_podcast` | read | Get a podcast |
| `castos_update_podcast` | **write** | Update a podcast |
| `castos_list_episodes` | read | List episodes |
| `castos_get_episode` | read | Get an episode |
| `castos_create_episode` | **write** | Create an episode |
| `castos_update_episode` | **write** | Update an episode |
| `castos_list_private_subscribers` | read | List private subscribers |
| `castos_get_private_subscriber` | read | Get a private subscriber |
| `castos_get_private_subscriber_by_email` | read | Find a private subscriber by email |
| `castos_create_private_subscriber` | **write** | Add a private subscriber |
| `castos_reactivate_private_subscriber` | **write** | Reactivate a private subscriber |
| `castos_revoke_private_subscriber` | **write** | Revoke a private subscription |
| `castos_list_categories` | read | List podcast categories |
| `castos_usage_status` | meta | Usage status (free-tier meter) |
| `castos_request_feature` | meta | Request a missing feature |
| `castos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `castos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `castos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `castos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `castos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
