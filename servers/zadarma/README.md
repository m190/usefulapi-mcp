# Zadarma MCP by usefulapi

Use your [Zadarma](https://zadarma.com) account from Claude, Cursor, or any MCP client. It reads your balance, price plan, call rates, SIP and PBX status, virtual numbers and call logs, and it can send an SMS. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zadarma.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zadarma.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zadarma https://zadarma.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zadarma&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzadarma.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zadarma": {
      "url": "https://zadarma.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zadarma credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zadarma/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Zadarma API key** and **secret key** (my.zadarma.com → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zadarma_get_balance` | read | Get account balance |
| `zadarma_get_tariff` | read | Get price plan |
| `zadarma_get_call_price` | read | Get call rate for a number |
| `zadarma_list_sip_numbers` | read | List SIP numbers |
| `zadarma_get_sip_status` | read | Get SIP number status |
| `zadarma_list_pbx_extensions` | read | List PBX extensions |
| `zadarma_get_pbx_extension_status` | read | Get PBX extension status |
| `zadarma_list_virtual_numbers` | read | List virtual numbers |
| `zadarma_get_call_statistics` | read | Get call statistics |
| `zadarma_get_call_recording_link` | read | Get call recording link |
| `zadarma_list_sms_templates` | read | List SMS templates |
| `zadarma_send_sms` | **write** | Send SMS |
| `zadarma_usage_status` | meta | Usage status (free-tier meter) |
| `zadarma_request_feature` | meta | Request a missing feature |
| `zadarma_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `zadarma_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `zadarma_upgrade` (it returns a Stripe Checkout link). Cancel any time with `zadarma_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `zadarma_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
