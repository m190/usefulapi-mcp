# Mighty Networks MCP by usefulapi

Use your [Mighty Networks](https://www.mightynetworks.com) account from Claude, Cursor, or any MCP client. It reads spaces, posts, members and events, and creates drafts, posts and comments as the host. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mighty-networks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mighty-networks.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mighty-networks https://mighty-networks.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mighty-networks&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmighty-networks.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mighty-networks": {
      "url": "https://mighty-networks.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mighty Networks credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mighty-networks/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **network subdomain or ID** (the part before `.mn.co`) and a **Mighty API key** (Network Admin → Integrations → Mighty API → New API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mightynetworks_get_me` | read | Get the authenticated host |
| `mightynetworks_get_network` | read | Get the network |
| `mightynetworks_list_spaces` | read | List spaces |
| `mightynetworks_get_space` | read | Get a space |
| `mightynetworks_list_space_posts` | read | List posts in a space |
| `mightynetworks_get_post` | read | Get a post |
| `mightynetworks_list_comments` | read | List comments on a post |
| `mightynetworks_list_members` | read | List members |
| `mightynetworks_get_member` | read | Get a member |
| `mightynetworks_list_events` | read | List events |
| `mightynetworks_create_post` | **write** | Create a post |
| `mightynetworks_create_comment` | **write** | Create a comment |
| `mightynetworks_usage_status` | meta | Usage status (free-tier meter) |
| `mightynetworks_request_feature` | meta | Request a missing feature |
| `mightynetworks_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mightynetworks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mightynetworks_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mightynetworks_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mightynetworks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
