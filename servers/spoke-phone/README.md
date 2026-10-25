# Spoke Phone MCP by usefulapi

Read Spoke calls, transcripts, directory and users; manage phonebook contacts and send SMS. Hosted, no local install.

**Live endpoint:** `https://spoke-phone.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/spoke-phone

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spoke-phone.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spoke-phone https://spoke-phone.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spoke-phone&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspoke-phone.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spoke-phone": {
      "url": "https://spoke-phone.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Spoke Phone credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spoke-phone/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **Spoke Phone credentials**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spokephone_list_calls` | read | List calls |
| `spokephone_get_call` | read | Get a call |
| `spokephone_get_call_recording` | read | Get a call recording |
| `spokephone_list_call_content_analysis` | read | List a call's AI analysis |
| `spokephone_list_directory` | read | List the directory |
| `spokephone_get_directory_entry` | read | Get a directory entry |
| `spokephone_list_users` | read | List users |
| `spokephone_get_user` | read | Get a user |
| `spokephone_list_teams` | read | List teams |
| `spokephone_list_locations` | read | List locations |
| `spokephone_get_location` | read | Get a location |
| `spokephone_list_location_users` | read | List a location's users |
| `spokephone_list_phonebooks` | read | List phonebooks |
| `spokephone_get_phonebook` | read | Get a phonebook |
| `spokephone_get_phonebook_contact` | read | Get a phonebook contact |
| `spokephone_list_transcripts` | read | List transcripts |
| `spokephone_get_transcript` | read | Get a transcript |
| `spokephone_get_transcript_segments` | read | Get transcript segments |
| `spokephone_list_content_analysis` | read | List AI content analysis |
| `spokephone_get_content_analysis` | read | Get an AI content analysis |
| `spokephone_list_webhooks` | read | List webhooks |
| `spokephone_get_webhook` | read | Get a webhook |
| `spokephone_list_trunks` | read | List SIP trunks |
| `spokephone_get_trunk` | read | Get a SIP trunk |
| `spokephone_send_sms` | **write** | Send an SMS |
| `spokephone_save_phonebook_contact` | **write** | Add or replace a phonebook contact |
| `spokephone_delete_phonebook_contact` | **write** | Delete a phonebook contact |
| `spokephone_usage_status` | meta | Usage status (free-tier meter) |
| `spokephone_request_feature` | meta | Request a missing feature |
| `spokephone_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `spokephone_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `spokephone_upgrade` (it returns a Stripe Checkout link). Cancel any time with `spokephone_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `spokephone_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
