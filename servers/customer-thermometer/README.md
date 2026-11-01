# Customer Thermometer MCP by usefulapi

Use your [Customer Thermometer](https://www.customerthermometer.com) account from Claude, Cursor, or any MCP client. Read Thermometers, recipient lists, scores, response rates, survey responses and comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://customer-thermometer.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://customer-thermometer.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http customer-thermometer https://customer-thermometer.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=customer-thermometer&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcustomer-thermometer.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "customer-thermometer": {
      "url": "https://customer-thermometer.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Customer Thermometer credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/customer-thermometer/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Customer Thermometer API key** and the **key type**, Super API key or Sub-API key (Automations → API Information). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `customerthermometer_list_thermometers` | read | List Thermometers |
| `customerthermometer_list_recipient_lists` | read | List recipient lists |
| `customerthermometer_get_send_quota` | read | Get send quota |
| `customerthermometer_get_happiness_value` | read | Get Happiness Factor |
| `customerthermometer_get_nps_value` | read | Get NPS score |
| `customerthermometer_get_temperature_rating` | read | Get Temperature Rating |
| `customerthermometer_get_response_rate` | read | Get response rate |
| `customerthermometer_count_responses` | read | Count responses |
| `customerthermometer_get_blast_results` | read | Get survey responses |
| `customerthermometer_get_comments` | read | Get response comments |
| `customerthermometer_usage_status` | meta | Usage status (free-tier meter) |
| `customerthermometer_request_feature` | meta | Request a missing feature |
| `customerthermometer_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `customerthermometer_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `customerthermometer_upgrade` (it returns a Stripe Checkout link). Cancel any time with `customerthermometer_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `customerthermometer_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
