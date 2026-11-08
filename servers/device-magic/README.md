# Device Magic MCP by usefulapi

Read Device Magic forms, submissions, devices and groups; send and revoke dispatches.

**Live endpoint:** `https://device-magic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/device-magic

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://device-magic.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http device-magic https://device-magic.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=device-magic&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdevice-magic.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "device-magic": {
      "url": "https://device-magic.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Device Magic credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/device-magic/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Device Magic API access token (Account Settings → API Access) and your organization id (the number in your dashboard URL, app.devicemagic.com/organizations/12345/...).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `devicemagic_list_forms` | read | List forms |
| `devicemagic_get_form` | read | Get form definition |
| `devicemagic_list_submissions` | read | List form submissions |
| `devicemagic_list_devices` | read | List devices |
| `devicemagic_get_device` | read | Get device |
| `devicemagic_list_groups` | read | List groups |
| `devicemagic_list_resources` | read | List resources |
| `devicemagic_describe_resource` | read | Describe resource |
| `devicemagic_list_destinations` | read | List form destinations |
| `devicemagic_get_destination` | read | Get form destination |
| `devicemagic_list_dispatches` | read | List outstanding dispatches |
| `devicemagic_list_device_dispatches` | read | List a device's outstanding dispatches |
| `devicemagic_get_dispatch` | read | Get dispatch with prefilled values |
| `devicemagic_list_dispatch_recipients` | read | List dispatch recipients |
| `devicemagic_send_dispatch` | **write** | Send a form to a device (dispatch) |
| `devicemagic_revoke_dispatch` | **write** | Revoke a dispatch |
| `devicemagic_approve_device` | **write** | Approve a pending device |
| `devicemagic_usage_status` | meta | Usage status (free-tier meter) |
| `devicemagic_request_feature` | meta | Request a missing feature |
| `devicemagic_upgrade` | meta | Upgrade to Pro or Pro+ |
| `devicemagic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `devicemagic_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `devicemagic_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `devicemagic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Device Magic.
