# Viral Loops MCP by usefulapi

Use your [Viral Loops](https://viral-loops.com) account from Claude, Cursor, or any MCP client. Read campaign stats, participants, referrals, ranks and rewards. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://viral-loops.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://viral-loops.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http viral-loops https://viral-loops.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=viral-loops&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fviral-loops.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "viral-loops": {
      "url": "https://viral-loops.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Viral Loops credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/viral-loops/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **campaign secret API token** (campaign editor → Settings → Installation). One token covers one campaign. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `viralloops_get_campaign_stats` | read | Campaign stats |
| `viralloops_get_campaign_info` | read | Campaign info |
| `viralloops_get_participant` | read | Get participant |
| `viralloops_get_participant_rank` | read | Participant rank |
| `viralloops_get_participant_order` | read | Participant join order |
| `viralloops_list_participant_referrals` | read | List participant referrals |
| `viralloops_get_participant_referrer` | read | Get participant referrer |
| `viralloops_search_participants` | read | Search participants |
| `viralloops_query_participants` | read | Query participants |
| `viralloops_list_pending_rewards` | read | List pending rewards |
| `viralloops_list_given_rewards` | read | List given rewards |
| `viralloops_usage_status` | meta | Usage status (free-tier meter) |
| `viralloops_request_feature` | meta | Request a missing feature |
| `viralloops_upgrade` | meta | Upgrade to Pro or Pro+ |
| `viralloops_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `viralloops_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `viralloops_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `viralloops_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
