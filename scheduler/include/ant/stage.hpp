#pragma once

namespace ant {

// Associates a stage with its schedule, allowing scheduler::stage to infer the
// schedule type.
//
// struct my_schedule
// {
//     using stage = ant::stage_of<my_schedule>;
//
//     struct my_stage : stage
//     {
//     };
// };
template<typename Schedule>
struct stage_of
{
    using schedule_type = Schedule;
};

} // namespace ant
