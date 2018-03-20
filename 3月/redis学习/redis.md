## Redis学习笔记##

**配置文件** 

直接修改redis.config，也可以使用 " CONFIG SET CONFIGNAME CONFIGVALUE  "

获取配置文件 CONFIG GET CONFIGNAME/*

**数据类型**

string 类型

set propName propValue

get propName 

散列/哈希

一种映射 字符串间的

列表 

类似数组？？ 可重复？

lpush arrName value  // arrName 数组的名字, value 推入的值

lrange arrName minIndex maxIndex

查看

集合

类似数组？？ 不可重重复

sadd arrName value // objName 对象的名字 value 

smembers arrName 

可排序集合

zadd arrName index value

查询的时候 ZRANGESCORE arrName minIndex maxIndex

**redis命令**

redis-cli

```redis键命令
redis-cli -h host -p port -a password //连接远程服务器，操作redis
redis-cli -h 127.0.0.1 -p 6379 -a "mypass"
```

| 编号   | 命令                                       | 描述                                |
| ---- | ---------------------------------------- | --------------------------------- |
| 1    | [DEL key](http://www.yiibai.com/redis/keys_del.html) | 此命令删除一个指定键(如果存在)。                 |
| 2    | [DUMP key](http://www.yiibai.com/redis/keys_dump.html) | 此命令返回存储在指定键的值的序列化版本。              |
| 3    | [EXISTS key](http://www.yiibai.com/redis/keys_exists.html) | 此命令检查键是否存在。                       |
| 4    | [EXPIRE key seconds](http://www.yiibai.com/redis/keys_expire.html) | 设置键在指定时间秒数之后到期/过期。                |
| 5    | [EXPIREAT key timestamp](http://www.yiibai.com/redis/keys_expireat.html) | 设置在指定时间戳之后键到期/过期。这里的时间是Unix时间戳格式。 |
| 6    | [PEXPIRE key milliseconds](http://www.yiibai.com/redis/keys_pexpire.html) | 设置键的到期时间(以毫秒为单位)。                 |
| 7    | [PEXPIREAT key milliseconds-timestamp](http://www.yiibai.com/redis/keys_pexpireat.html) | 以Unix时间戳形式来设置键的到期时间(以毫秒为单位)。      |
| 8    | [KEYS pattern](http://www.yiibai.com/redis/keys_keys.html) | 查找与指定模式匹配的所有键。                    |
| 9    | [MOVE key db](http://www.yiibai.com/redis/keys_move.html) | 将键移动到另一个数据库。                      |
| 10   | [PERSIST key](http://www.yiibai.com/redis/keys_persist.html) | 删除指定键的过期时间，得永生。                   |
| 11   | [PTTL key](http://www.yiibai.com/redis/keys_pttl.html) | 获取键的剩余到期时间。                       |
| 12   | [RANDOMKEY](http://www.yiibai.com/redis/keys_randomkey.html) | 从Redis返回一个随机的键。                   |
| 13   | [RENAME key newkey](http://www.yiibai.com/redis/keys_rename.html) | 更改键的名称。                           |
| 14   | [PTTL key](http://www.yiibai.com/redis/keys_pttl.html) | 获取键到期的剩余时间(以毫秒为单位)。               |
| 15   | [RENAMENX key newkey](http://www.yiibai.com/redis/keys_renamenx.html) | 如果新键不存在，重命名键。                     |
| 16   | [TYPE key](http://www.yiibai.com/redis/keys_type.html) | 返回存储在键中的值的数据类型。                   |

**redis字符串命令**

| 编号   | 命令                                       | 描述说明                  |
| ---- | ---------------------------------------- | --------------------- |
| 1    | [SET key value](http://www.yiibai.com/redis/strings_set.html) | 此命令设置指定键的值。           |
| 2    | [GET key](http://www.yiibai.com/redis/strings_get.html) | 获取指定键的值。              |
| 3    | [GETRANGE key start end](http://www.yiibai.com/redis/strings_getrange.html) | 获取存储在键上的字符串的子字符串。     |
| 4    | [GETSET key value](http://www.yiibai.com/redis/strings_getset.html) | 设置键的字符串值并返回其旧值。       |
| 5    | [GETBIT key offset](http://www.yiibai.com/redis/strings_getbit.html) | 返回在键处存储的字符串值中偏移处的位值。  |
| 6    | [MGET key1 [key2..\]](http://www.yiibai.com/redis/strings_mget.html) | 获取所有给定键的值             |
| 7    | [SETBIT key offset value](http://www.yiibai.com/redis/strings_setbit.html) | 存储在键上的字符串值中设置或清除偏移处的位 |
| 8    | [SETEX key seconds value](http://www.yiibai.com/redis/strings_setex.html) | 使用键和到期时间来设置值          |
| 9    | [SETNX key value](http://www.yiibai.com/redis/strings_setnx.html) | 设置键的值，仅当键不存在时         |
| 10   | [SETRANGE key offset value](http://www.yiibai.com/redis/strings_setrange.html) | 在指定偏移处开始的键处覆盖字符串的一部分  |
| 11   | [STRLEN key](http://www.yiibai.com/redis/strings_strlen.html) | 获取存储在键中的值的长度          |
| 12   | [MSET key value [key value …\]](http://www.yiibai.com/redis/strings_mset.html) | 为多个键分别设置它们的值          |
| 13   | [MSETNX key value [key value …\]](http://www.yiibai.com/redis/strings_msetnx.html) | 为多个键分别设置它们的值，仅当键不存在时  |
| 14   | [PSETEX key milliseconds value](http://www.yiibai.com/redis/strings_psetex.html) | 设置键的值和到期时间(以毫秒为单位)    |
| 15   | [INCR key](http://www.yiibai.com/redis/strings_incr.html) | 将键的整数值增加`1`           |
| 16   | [INCRBY key increment](http://www.yiibai.com/redis/strings_incrby.html) | 将键的整数值按给定的数值增加        |
| 17   | [INCRBYFLOAT key increment](http://www.yiibai.com/redis/strings_incrbyfloat.html) | 将键的浮点值按给定的数值增加        |
| 18   | [DECR key](http://www.yiibai.com/redis/strings_decr.html) | 将键的整数值减`1`            |
| 19   | [DECRBY key decrement](http://www.yiibai.com/redis/strings_decrby.html) | 按给定数值减少键的整数值          |
| 20   | [APPEND key value](http://www.yiibai.com/redis/strings_append.html) | 将指定值附加到键              |