# Sendlane MCP by usefulapi

Use [Sendlane](https://www.sendlane.com) from Claude, Cursor, or any MCP client — lists, contacts, tags, segments, custom fields, campaign and SMS reports.
Hosted, no local install: connect with your own Sendlane credentials.

**Live endpoint:** `https://sendlane.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sendlane

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sendlane.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sendlane https://sendlane.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sendlane&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsendlane.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sendlane": {
      "url": "https://sendlane.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sendlane credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sendlane/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sendlane_list_lists` | read | List lists |
| `sendlane_get_list` | read | Get list |
| `sendlane_list_list_contacts` | read | List contacts of a list |
| `sendlane_list_list_unsubscribed` | read | List unsubscribed contacts of a list |
| `sendlane_list_contacts` | read | List contacts |
| `sendlane_get_contact` | read | Get contact |
| `sendlane_list_unsubscribed_contacts` | read | List unsubscribed contacts |
| `sendlane_get_contact_subscriptions` | read | Get contact subscriptions |
| `sendlane_get_contact_tags` | read | Get contact tags |
| `sendlane_get_contact_custom_fields` | read | Get contact custom fields |
| `sendlane_list_tags` | read | List tags |
| `sendlane_get_tag` | read | Get tag |
| `sendlane_list_tag_contacts` | read | List contacts with a tag |
| `sendlane_list_custom_fields` | read | List custom fields |
| `sendlane_list_segments` | read | List segments |
| `sendlane_list_segment_contacts` | read | List contacts of a segment |
| `sendlane_list_campaigns` | read | List campaigns |
| `sendlane_get_campaign` | read | Get campaign |
| `sendlane_get_campaign_report` | read | Get campaign report |
| `sendlane_list_sms_messages` | read | List SMS messages |
| `sendlane_get_sms_report` | read | Get SMS report |
| `sendlane_list_sender_profiles` | read | List sender profiles |
| `sendlane_create_list` | **write** | Create list |
| `sendlane_update_list` | **write** | Update list |
| `sendlane_add_contacts_to_list` | **write** | Add contacts to a list |
| `sendlane_remove_contact_from_list` | **write** | Remove a contact from a list |
| `sendlane_unsubscribe_contact` | **write** | Unsubscribe a contact |
| `sendlane_create_tag` | **write** | Create tag |
| `sendlane_add_contact_tags` | **write** | Tag a contact |
| `sendlane_remove_contact_tag` | **write** | Untag a contact |
| `sendlane_set_contact_custom_fields` | **write** | Set contact custom fields |
| `sendlane_usage_status` | meta | Usage status (free-tier meter) |
| `sendlane_request_feature` | meta | Request a missing feature |
| `sendlane_upgrade` | meta | Upgrade to Pro (unlimited) |
| `sendlane_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `sendlane_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sendlane_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sendlane_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Sendlane.
