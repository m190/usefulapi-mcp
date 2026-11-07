# MemberVault MCP by usefulapi

Use your [MemberVault](https://membervault.co) account from Claude, Cursor, or any MCP client. List the courses of an account, and add, remove or delete its users. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://membervault.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://membervault.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http membervault https://membervault.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=membervault&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmembervault.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "membervault": {
      "url": "https://membervault.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MemberVault credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/membervault/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **MemberVault account name** (the part before .mvsite.app in your API links) and your **MemberVault API key** (MemberVault admin → Integrations / Other → Webhooks API block). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `membervault_list_courses` | read | List courses |
| `membervault_add_user` | **write** | Add a user to a course |
| `membervault_remove_user` | **write** | Remove a user's access to a course |
| `membervault_delete_user` | **write** | Delete a user (IRREVERSIBLE) |
| `membervault_usage_status` | meta | Usage status (free-tier meter) |
| `membervault_request_feature` | meta | Request a missing feature |
| `membervault_upgrade` | meta | Upgrade to Pro or Pro+ |
| `membervault_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `membervault_upgrade` (it returns a Stripe Checkout link). Cancel any time with `membervault_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `membervault_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
