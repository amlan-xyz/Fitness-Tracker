import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import { AddGoal } from "../../components/Forms/GoalEntryForm";

//actions
import { deleteGoals, fetchGoals } from "../../actions/goals.actions";

//icons
import { AiOutlineDelete } from "react-icons/ai";
import { Loader } from "../../components/Loader/Loader";

export const Goals = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (goalId) => {
    dispatch(deleteGoals(goalId));
  };

  const convertDate = (date) => {
    const timeStamp = new Date(date);
    const newTime = timeStamp.toDateString();
    return newTime;
  };

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <section className="section">
      <header className="section__header">
        <p className="section__header-p">Goals</p>
      </header>

      <AddGoal />

      <div className="section__container">
        {loading === true ? (
          <Loader />
        ) : (
          <ul className="list">
            {goals &&
              goals.map((goal) => (
                <li className="list-item" key={goal._id}>
                  <button onClick={() => handleDelete(goal._id)}>
                    <AiOutlineDelete />
                  </button>
                  <h3>{goal.goal_name}</h3>
                  <p>{goal.goal_description}</p>
                  <p>{convertDate(goal.target_date)}</p>
                  <p>{goal.target_calories} calories</p>
                  <p
                    className={
                      goal.goal_status === "in-progress"
                        ? "highlight-red"
                        : "highlight-green"
                    }
                  >
                    {goal.goal_status}
                  </p>
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
};
