# Judge.me MCP by usefulapi

Use your [Judge.me](https://judge.me) account from Claude, Cursor, or any MCP client. Read a store's reviews, review counts, reviewers and settings, and post public replies to reviews. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://judge-me.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://judge-me.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http judge-me https://judge-me.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=judge-me&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjudge-me.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "judge-me": {
      "url": "https://judge-me.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Judge.me credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/judge-me/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **store's myshopify.com domain** and the **Judge.me private API token** (in Judge.me admin, go to Settings → Integrations → View API tokens; not the public token). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `judgeme_list_reviews` | read | List reviews |
| `judgeme_count_reviews` | read | Count reviews |
| `judgeme_get_review` | read | Get review |
| `judgeme_get_reviewer` | read | Get reviewer |
| `judgeme_get_shop_info` | read | Get shop info |
| `judgeme_get_settings` | read | Get settings |
| `judgeme_list_webhooks` | read | List webhooks |
| `judgeme_reply_to_review` | **write** | Reply to review |
| `judgeme_usage_status` | meta | Usage status (free-tier meter) |
| `judgeme_request_feature` | meta | Request a missing feature |
| `judgeme_upgrade` | meta | Upgrade to Pro or Pro+ |
| `judgeme_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `judgeme_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `judgeme_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `judgeme_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
