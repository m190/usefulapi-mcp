# Kinde MCP by usefulapi

Users, organizations, roles, permissions, applications and feature flags. Hosted, no local install.

**Live endpoint:** `https://kinde.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "kinde": {
      "url": "https://kinde.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Kinde credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kinde_get_business` | read | Get the business |
| `kinde_list_users` | read | List users |
| `kinde_get_user` | read | Get one user |
| `kinde_list_organizations` | read | List organizations |
| `kinde_get_organization` | read | Get one organization |
| `kinde_list_organization_users` | read | List an organization's users |
| `kinde_get_user_roles_in_organization` | read | Get a user's roles in an organization |
| `kinde_get_user_permissions_in_organization` | read | Get a user's permissions in an organization |
| `kinde_list_roles` | read | List roles |
| `kinde_list_role_permissions` | read | List a role's permissions |
| `kinde_list_permissions` | read | List permissions |
| `kinde_list_applications` | read | List applications |
| `kinde_get_application` | read | Get one application |
| `kinde_list_apis` | read | List APIs |
| `kinde_list_environment_feature_flags` | read | List environment feature flags |
| `kinde_list_organization_feature_flags` | read | List an organization's feature flags |
| `kinde_list_subscribers` | read | List subscribers |
| `kinde_create_organization` | **write** | Create an organization |
| `kinde_add_users_to_organization` | **write** | Add users to an organization |
| `kinde_grant_user_role_in_organization` | **write** | Grant a user a role in an organization |
| `kinde_grant_user_permission_in_organization` | **write** | Grant a user a permission in an organization |
| `kinde_create_role` | **write** | Create a role |
| `kinde_create_permission` | **write** | Create a permission |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
