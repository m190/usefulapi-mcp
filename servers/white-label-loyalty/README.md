# White Label Loyalty MCP by usefulapi

Use your [White Label Loyalty](https://whitelabel-loyalty.com) account from Claude, Cursor, or any MCP client. Read rewards and customer wallets, and purchase a reward for a customer who asked for it. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://white-label-loyalty.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://white-label-loyalty.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http white-label-loyalty https://white-label-loyalty.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=white-label-loyalty&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwhite-label-loyalty.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "white-label-loyalty": {
      "url": "https://white-label-loyalty.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your White Label Loyalty credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/white-label-loyalty/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **tenant API key** (issued per tenant by your White Label Loyalty account manager) and the **region** of your tenant (EU, US or GCC, production or staging). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `whitelabelloyalty_list_rewards` | read | List rewards |
| `whitelabelloyalty_get_reward` | read | Get reward |
| `whitelabelloyalty_get_my_wallet` | read | Get customer wallet |
| `whitelabelloyalty_get_my_wallet_predictions` | read | Get customer wallet predictions |
| `whitelabelloyalty_purchase_reward` | **write** | Purchase reward |
| `whitelabelloyalty_usage_status` | meta | Usage status (free-tier meter) |
| `whitelabelloyalty_request_feature` | meta | Request a missing feature |
| `whitelabelloyalty_upgrade` | meta | Upgrade to Pro or Pro+ |
| `whitelabelloyalty_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `whitelabelloyalty_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `whitelabelloyalty_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `whitelabelloyalty_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
