const kue = require('kue')
const redisConfig = require('../../config/redis')
const jobs = require('../Jobs')

const Queue = kue.createQueue({ redis: redisConfig })

Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)

module.exports = Queue
