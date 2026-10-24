# Rinkel MCP by usefulapi

Read Rinkel calls, voicemails, contacts and numbers; add call notes, edit contacts, block numbers.

**Live endpoint:** `https://rinkel.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/rinkel

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rinkel.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rinkel https://rinkel.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rinkel&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frinkel.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rinkel": {
      "url": "https://rinkel.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rinkel credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rinkel/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Rinkel **API key** (create it in My Rinkel > Settings > Integrations; API access needs the Professional or Expert plan).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rinkel_list_calls` | read | List calls |
| `rinkel_get_call` | read | Get a call |
| `rinkel_get_call_by_network_id` | read | Get a call by network call id |
| `rinkel_get_call_transcription` | read | Get a call transcription |
| `rinkel_get_call_recording_url` | read | Get a call recording URL |
| `rinkel_list_voicemails` | read | List voicemails |
| `rinkel_count_new_voicemails` | read | Count new voicemails |
| `rinkel_get_voicemail_url` | read | Get a voicemail URL |
| `rinkel_list_contacts` | read | List contacts |
| `rinkel_get_contact` | read | Get a contact |
| `rinkel_find_contact_by_number` | read | Find a contact by phone number |
| `rinkel_list_users` | read | List users |
| `rinkel_get_user` | read | Get a user |
| `rinkel_list_numbers` | read | List phone numbers |
| `rinkel_get_number` | read | Get a phone number |
| `rinkel_list_recordings` | read | List greeting recordings |
| `rinkel_list_webhooks` | read | List webhooks |
| `rinkel_validate_phone_number` | read | Validate a phone number |
| `rinkel_add_call_note` | **write** | Add a call note |
| `rinkel_update_call_note` | **write** | Update a call note |
| `rinkel_delete_call_note` | **write** | Delete a call note |
| `rinkel_create_contact` | **write** | Create a contact |
| `rinkel_update_contact` | **write** | Update a contact |
| `rinkel_delete_contact` | **write** | Delete a contact |
| `rinkel_block_number` | **write** | Block a number |
| `rinkel_unblock_number` | **write** | Unblock a number |
| `rinkel_start_call` | **write** | Start an outgoing call |
| `rinkel_usage_status` | meta | Usage status (free-tier meter) |
| `rinkel_request_feature` | meta | Request a missing feature |
| `rinkel_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `rinkel_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `rinkel_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rinkel_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rinkel_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Rinkel.
