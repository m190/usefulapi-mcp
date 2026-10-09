# Increase MCP by usefulapi

Read your Increase bank accounts, balances, transactions, transfers, cards and entities from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Increase API key.

**Live endpoint:** `https://increase.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/increase

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://increase.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http increase https://increase.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=increase&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fincrease.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "increase": {
      "url": "https://increase.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Increase credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/increase/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Increase API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `increase_list_accounts` | read | List accounts |
| `increase_get_account` | read | Get account |
| `increase_get_account_balance` | read | Get account balance |
| `increase_list_account_numbers` | read | List account numbers |
| `increase_list_transactions` | read | List transactions |
| `increase_get_transaction` | read | Get transaction |
| `increase_list_pending_transactions` | read | List pending transactions |
| `increase_list_declined_transactions` | read | List declined transactions |
| `increase_list_ach_transfers` | read | List ACH transfers |
| `increase_get_ach_transfer` | read | Get ACH transfer |
| `increase_list_wire_transfers` | read | List wire transfers |
| `increase_list_check_transfers` | read | List check transfers |
| `increase_list_real_time_payments_transfers` | read | List Real-Time Payments transfers |
| `increase_list_cards` | read | List cards |
| `increase_list_entities` | read | List entities |
| `increase_list_external_accounts` | read | List external accounts |
| `increase_lookup_routing_number` | read | Look up routing number |
| `increase_create_external_account` | **write** | Create external account |
| `increase_usage_status` | meta | Usage status (free-tier meter) |
| `increase_request_feature` | meta | Request a missing feature |
| `increase_upgrade` | meta | Upgrade to Pro (unlimited) |
| `increase_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `increase_upgrade` (it returns a Stripe Checkout link). Cancel any time with `increase_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `increase_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
