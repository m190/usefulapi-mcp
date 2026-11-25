# bsport MCP by usefulapi

Use your [bsport](https://www.bsport.io) account from Claude, Cursor, or any MCP client. It looks up clients, classes, bookings and passes, and books clients or records attendance. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bsport.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bsport.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bsport https://bsport.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bsport&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbsport.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bsport": {
      "url": "https://bsport.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your bsport credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bsport/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **bsport API key**, your **Client ID**, and a **Company ID** or **Franchisor ID**. bsport issues these on request during its beta. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bsport_get_api_key_info` | read | Show API key info |
| `bsport_list_clients` | read | List clients |
| `bsport_get_client` | read | Get a client |
| `bsport_list_client_notes` | read | List client notes |
| `bsport_list_client_class_passes` | read | List client passes |
| `bsport_list_client_subscriptions` | read | List client subscriptions |
| `bsport_list_bookings` | read | List bookings |
| `bsport_get_booking` | read | Get a booking |
| `bsport_list_classes` | read | List classes |
| `bsport_get_class` | read | Get a class |
| `bsport_get_class_waitlist` | read | Get a class waitlist |
| `bsport_list_appointments` | read | List appointments |
| `bsport_list_teachers` | read | List teachers |
| `bsport_list_venues` | read | List venues |
| `bsport_list_tags` | read | List tags |
| `bsport_list_tag_groups` | read | List tag groups |
| `bsport_list_webhook_registrations` | read | List webhook registrations |
| `bsport_create_client` | **write** | Create a client |
| `bsport_create_booking` | **write** | Book a client into classes |
| `bsport_cancel_booking` | **write** | Cancel a booking |
| `bsport_record_attendance` | **write** | Record attendance |
| `bsport_tag_client` | **write** | Add a tag to a client |
| `bsport_untag_client` | **write** | Remove a tag from a client |
| `bsport_create_client_note` | **write** | Add an internal note |
| `bsport_create_tag` | **write** | Create a tag |
| `bsport_archive_client` | **write** | Archive a client |
| `bsport_set_client_class_pass_enabled` | **write** | Enable or disable a client pass |
| `bsport_usage_status` | meta | Usage status (free-tier meter) |
| `bsport_request_feature` | meta | Request a missing feature |
| `bsport_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bsport_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bsport_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bsport_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bsport_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
