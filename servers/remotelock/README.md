# RemoteLock MCP by usefulapi

Connect a dedicated app for your API-enabled RemoteLock account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://remotelock.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http remotelock https://remotelock.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=remotelock&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fremotelock.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "remotelock": {
      "url": "https://remotelock.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RemoteLock credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/remotelock/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `remotelock_get_account` | read | Get account |
| `remotelock_list_locations` | read | List locations |
| `remotelock_get_location` | read | Get location |
| `remotelock_list_devices` | read | List devices (locks) |
| `remotelock_get_device` | read | Get device |
| `remotelock_lock_device` | **write** | Lock a lock |
| `remotelock_unlock_device` | **write** | Unlock a lock |
| `remotelock_list_access_persons` | read | List access users and guests |
| `remotelock_get_access_person` | read | Get access user or guest |
| `remotelock_create_access_user` | **write** | Create a permanent access user |
| `remotelock_create_access_guest` | **write** | Create a time-limited access guest |
| `remotelock_deactivate_access_person` | **write** | Deactivate an access user or guest |
| `remotelock_list_person_accesses` | read | List a person's door access |
| `remotelock_list_device_accesses` | read | List who can open a lock |
| `remotelock_grant_access` | **write** | Grant door access |
| `remotelock_revoke_access` | **write** | Revoke door access |
| `remotelock_list_door_groups` | read | List door groups |
| `remotelock_list_group_items` | read | List the locks in a door group |
| `remotelock_list_notifications` | read | List notifications (activity) |
| `remotelock_get_event` | read | Get event |
| `remotelock_usage_status` | meta | Usage status (free-tier meter) |
| `remotelock_request_feature` | meta | Request a missing feature |
| `remotelock_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `remotelock_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per RemoteLock account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `remotelock_upgrade` (it returns a Stripe Checkout link). Cancel any time with `remotelock_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `remotelock_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
