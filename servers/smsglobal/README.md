# SMSGlobal MCP by usefulapi

Remote MCP endpoint: https://smsglobal.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smsglobal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smsglobal https://smsglobal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smsglobal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmsglobal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smsglobal": {
      "url": "https://smsglobal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SMSGlobal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smsglobal/

<!-- connect:end (generated above, edit below) -->

Connect with your SMSGlobal credentials using the hosted authorization flow.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smsglobal_get_account` | read | Read account contact details |
| `smsglobal_get_credit_balance` | read | Read prepaid credit balance |
| `smsglobal_get_contact` | read | Get a contact |
| `smsglobal_list_groups` | read | List contact groups |
| `smsglobal_get_group` | read | Get a contact group |
| `smsglobal_list_group_contacts` | read | List group contacts |
| `smsglobal_list_outgoing_messages` | read | Review outgoing messages |
| `smsglobal_get_outgoing_message` | read | Get outgoing message status |
| `smsglobal_list_incoming_messages` | read | Review incoming messages |
| `smsglobal_get_incoming_message` | read | Read an incoming message |
| `smsglobal_list_dedicated_numbers` | read | List dedicated numbers |
| `smsglobal_get_dedicated_number` | read | Get a dedicated number |
| `smsglobal_list_opt_outs` | read | Review opted-out numbers |
| `smsglobal_list_shared_pools` | read | List shared number pools |
| `smsglobal_get_shared_pool` | read | Get a shared number pool |
| `smsglobal_list_verified_numbers` | read | List verified origin numbers |
| `smsglobal_list_sender_ids` | read | Review sender IDs |
| `smsglobal_get_sender_id` | read | Get a sender ID |
| `smsglobal_usage_status` | meta | Usage status (free-tier meter) |
| `smsglobal_request_feature` | meta | Request a missing feature |
| `smsglobal_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `smsglobal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `smsglobal_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smsglobal_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smsglobal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

See the repository license.
