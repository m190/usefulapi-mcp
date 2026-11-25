# Sociamonials MCP by usefulapi

Use your [Sociamonials](https://www.sociamonials.com) account from Claude, Cursor, or any MCP client. Read posts, social profiles, analytics and Social Inbox conversations, and create, schedule, edit or cancel posts; nothing publishes at once. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sociamonials.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sociamonials.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sociamonials https://sociamonials.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sociamonials&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsociamonials.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sociamonials": {
      "url": "https://sociamonials.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sociamonials credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sociamonials/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Sociamonials API key**, made under **API keys** in your Sociamonials account. The key needs a paid or lifetime plan. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sociamonials_whoami` | read | Show my key's permissions |
| `sociamonials_list_workspaces` | read | List workspaces |
| `sociamonials_list_social_profiles` | read | List social profiles |
| `sociamonials_list_posts` | read | List posts |
| `sociamonials_get_post` | read | Get a post |
| `sociamonials_get_post_analytics` | read | Get post analytics |
| `sociamonials_get_workspace_analytics` | read | Get workspace analytics |
| `sociamonials_list_inbox_conversations` | read | List inbox conversations |
| `sociamonials_get_job` | read | Get a bulk job |
| `sociamonials_create_post` | **write** | Create a post |
| `sociamonials_schedule_draft` | **write** | Schedule a draft |
| `sociamonials_update_post` | **write** | Edit a post |
| `sociamonials_cancel_post` | **write** | Cancel a post |
| `sociamonials_usage_status` | meta | Usage status (free-tier meter) |
| `sociamonials_request_feature` | meta | Request a missing feature |
| `sociamonials_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sociamonials_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sociamonials_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sociamonials_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sociamonials_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
