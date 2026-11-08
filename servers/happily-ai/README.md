# Happily.ai MCP by usefulapi

Use your [Happily.ai](https://happily.ai) account from Claude, Cursor, or any MCP client. Read members, engagement profiles, survey questions and responses, recognition and feedback, and send recognition. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://happily-ai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://happily-ai.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http happily-ai https://happily-ai.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=happily-ai&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhappily-ai.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "happily-ai": {
      "url": "https://happily-ai.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Happily.ai credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/happily-ai/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Happily.ai API key** (my.happily.ai/integrations) and the **stage** the key was made for. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `happily_list_members` | read | List members |
| `happily_get_member_profile` | read | Get a member's engagement profile |
| `happily_list_questions` | read | List survey questions |
| `happily_list_responses` | read | List survey responses |
| `happily_list_recognitions` | read | List received recognition |
| `happily_get_medal` | read | Get a medal |
| `happily_list_performance_feedback` | read | List performance feedback |
| `happily_send_recognition` | **write** | Send recognition (gives coins) |
| `happily_usage_status` | meta | Usage status (free-tier meter) |
| `happily_request_feature` | meta | Request a missing feature |
| `happily_upgrade` | meta | Upgrade to Pro or Pro+ |
| `happily_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `happily_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `happily_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `happily_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
