# iContact MCP by usefulapi

Use [iContact](https://www.icontact.com) from Claude, Cursor, or any MCP client — work with your contacts, lists, messages and reports. Hosted, no local install: connect with your own iContact credentials.

**Live endpoint:** `https://icontact.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/icontact

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://icontact.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http icontact https://icontact.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=icontact&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ficontact.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "icontact": {
      "url": "https://icontact.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your iContact credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/icontact/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your **iContact application id, username and API password** (iContact's API Developer Portal). They are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `icontact_get_account` | read | Get account |
| `icontact_list_contacts` | read | List contacts |
| `icontact_get_contact` | read | Get contact |
| `icontact_create_contact` | **write** | Create contact |
| `icontact_update_contact` | **write** | Update contact |
| `icontact_list_lists` | read | List mailing lists |
| `icontact_get_list` | read | Get mailing list |
| `icontact_list_subscriptions` | read | List subscriptions |
| `icontact_set_subscription` | **write** | Subscribe or unsubscribe contact |
| `icontact_list_campaigns` | read | List campaigns |
| `icontact_get_campaign` | read | Get campaign |
| `icontact_list_messages` | read | List messages |
| `icontact_get_message` | read | Get message |
| `icontact_get_message_statistics` | read | Get message statistics |
| `icontact_list_message_activity` | read | List message activity |
| `icontact_list_sends` | read | List sends |
| `icontact_get_send` | read | Get send |
| `icontact_list_segments` | read | List segments |
| `icontact_get_segment` | read | Get segment |
| `icontact_list_custom_fields` | read | List custom fields |
| `icontact_usage_status` | meta | Usage status (free-tier meter) |
| `icontact_request_feature` | meta | Request a missing feature |
| `icontact_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `icontact_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `icontact_upgrade` (it returns a Stripe Checkout link). Cancel any time with `icontact_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `icontact_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
